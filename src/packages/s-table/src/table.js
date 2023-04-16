// eslint-disable-next-line no-unused-vars
import { Loading, Table, Pagination } from 'element-ui'
const ElTable = Table // 暂时无法使用import as 方式，应该是babel配置问题
const ElPagination = Pagination
import T from 'element-ui/lib/table'
import eleTableMethods from './eleTableMethods' // 继承的element方法
export default {
  name: 'STable',
  data() {
    return {
      tableData: [],
      total: 0,
      totalPage: 0,
      tableParams: {
        pageNum: 1,
        pageSize: 10,
      },
      loading: false,
      loadingService: null,
      loadDataTimer: null,
      isLazy: true, // 是懒加载还是静态数据
    }
  },
  props: Object.assign({}, T.props, {
    rowKey: {
      type: [String, Function],
      default: 'key',
    },
    data: {
      type: [Function, Array], // 如果是函数方式，就是懒加载；如果是数组，就是静态数据
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    showSizeChanger: {
      type: Boolean,
      default: true,
    },
    pageSizes: {
      type: Array,
      default: function () {
        return [10, 20, 30, 50, 100]
      },
    },
    size: {
      type: String,
      default: 'mini',
    },
    showPagination: {
      type: [String, Boolean],
      default: 'auto',
    },
    paginationLayout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    isDefaultRefresh: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
  }),
  components: {
    ElTable,
    ElPagination,
  },
  mounted() {
    this.tableParams.pageSize = this.pageSize
    if (this.isDefaultRefresh === true) {
      this.refresh(true)
    }
  },
  watch: {
    data: {
      immediate: true,
      handler() {
        // console.log('this.data:', this.data, Object.prototype.toString.call(this.data));
        if (Object.prototype.toString.call(this.data) == '[object Array]') {
          this.isLazy = false
          this.tableParams.pageNum = 1
          this.$nextTick(() => {
            this.updateStaticTableData()
          })
        }
      },
    },
  },
  methods: {
    updateStaticTableData() {
      const { pageNum, pageSize } = this.tableParams
      this.tableData = this.data.slice((pageNum - 1) * pageSize, pageNum * pageSize)
      this.total = this.data.length
      this.resetTableScrollDefault()
    },
    /**
     * 表格重新加载方法
     * 如果参数为 true, 则强制刷新到第一页
     * @param Boolean bool
     */
    refresh(bool = false, current) {
      if (bool === true) {
        this.tableParams.pageNum = 1
      } else {
        if (current) {
          this.tableParams.pageNum = current || 1
        }
      }
      this.updateTable()
    },
    clearData() {
      this.loading = false
      this.tableData = []
      this.total = 0
      this.totalPage = 0
      this.tableParams = {
        pageNum: 1,
        pageSize: 10,
      }
    },
    updateTable() {
      if (this.isLazy) {
        this.loadData()
      } else {
        this.updateStaticTableData()
      }
    },
    loadData() {
      const result = this.data(this.tableParams)
      this.loading = true
      // this.loadingService = Loading.service({ target: this.$refs.stableRef });
      result
        .then((res) => {
          const { total = 0, totalPage = 0, data = [] } = res
          const pageNum = res.pageNum
          const pageSize = res.pageSize
          this.tableData = data
          // 后端没有返回，就是用前端的参数
          if (pageNum && pageSize) {
            this.tableParams = {
              pageNum: pageNum ? pageNum : 1,
              pageSize: pageSize,
            }
          }
          this.total = total
          this.totalPage = totalPage
          /**
           * 自动翻页
           * 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
           */
          if (data.length === 0 && this.showPagination && this.tableParams.pageNum > 1) {
            this.tableParams.pageNum = this.tableParams.pageNum - 1
            this.loadDataTimer = setTimeout(() => {
              clearTimeout(this.loadDataTimer)
              this.loadData()
            }, 0)
            return
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false
          this.resetTableScrollDefault()
          // this.loadingService.close();
        })
    },
    handleSizeChange(pageSize) {
      this.tableParams.pageSize = pageSize
      this.tableParams.pageNum = 1
      this.updateTable()
    },
    handleCurrentChange(pageNum) {
      this.tableParams.pageNum = pageNum
      this.updateTable()
    },
    rowClick(row, column, event) {
      this.$emit('row-click', row, column, event)
    },
    handleSelectionChange(selection) {
      this.$emit('handleSelectionChange', selection)
    },
    resetTableScrollDefault() {
      this.$nextTick(() => {
        const dom = this.$refs.eleTableRef?.$el?.querySelector('.el-table__body-wrapper')
        if (dom) {
          dom.scrollTop = 0
          dom.scrollLeft = 0
        }
      })
    },
    ...eleTableMethods, // 继承的element方法
  },
  render() {
    const { tableData = [], total = 0, tableParams = {}, loading = false } = this
    const props = {}
    const localKeys = Object.keys(this.$data)
    // 过滤掉本地定义使用的key
    Object.keys(T.props).forEach((TKey) => {
      if (localKeys.includes(TKey) === false && TKey !== 'data') {
        props[TKey] = this._props[TKey]
      }
    })
    let paginationLayout = this._props.paginationLayout
    if (this._props.showSizeChanger === false) {
      paginationLayout = paginationLayout
        .split(',')
        .map((item) => item.trim())
        .filter((item) => item !== 'sizes')
        .join(',')
    }
    return (
      <div v-loading={this.loading} class="s-table" ref="stableRef">
        <el-table
          data={tableData}
          ref="eleTableRef"
          {...{ props, scopedSlots: { ...this.$scopedSlots } }}
          onRow-click={this.rowClick}
          onSelection-change={this.handleSelectionChange}
          style="width: 100%"
        >
          {Object.keys(this.$slots).map((name) => (
            <template slot={name}>{this.$slots[name]}</template>
          ))}
        </el-table>
        {this._props.showPagination && (
          <el-pagination
            disabled={loading}
            style="text-align: end; margin-top: 10px"
            onSize-change={this.handleSizeChange}
            onCurrent-change={this.handleCurrentChange}
            current-page={tableParams.pageNum}
            page-sizes={this._props.pageSizes}
            page-size={tableParams.pageSize}
            layout={paginationLayout}
            total={total}
          ></el-pagination>
        )}
      </div>
    )
  },
}
