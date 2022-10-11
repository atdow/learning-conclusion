/*
 * @Author: atdow
 * @Date: 2022-10-09 17:44:14
 * @LastEditors: null
 * @LastEditTime: 2022-10-11 22:56:21
 * @Description: file description
 */
export default {
  props: {
    data: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    },
    yAxisRender: {
      type: Function,
      default: function (data) {
        return data.name
      }
    },
    lazy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    getItem(data) {
      if (!data.children || data.children.length === 0) {
        return <li class='common-item last-children'>
          <span>{this.yAxisRender(data)}</span>
          {this.lazy === true && data.isLeaf !== true && data.isLoading !== true && <span class="fold-icon" onClick={() => this.expandLoad(data)}>+</span>}
          {this.lazy === true && data.isLeaf !== true && data.isLoading === true
            && <div class='loading-icon'>
              <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4V8" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 6.6795L32 10.1436" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M41.3203 14L37.8562 16" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M44 24H40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M41.3203 34L37.8562 32" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 41.3205L32 37.8564" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24 44V40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 41.3205L16 37.8564" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.67969 34L10.1438 32" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 24H8" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.67969 14L10.1438 16" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 6.6795L16 10.1436" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          }
        </li>
      } else {
        return <li class={this.className({ 'common-item': true, 'collapse': data.collapse === true })} >
          <span>{this.yAxisRender(data)}</span>
          <span class="fold-icon" onClick={() => this.foldChange(data)}>{data.collapse ? '+' : '-'}</span>
          <ul>
            <li style="padding-left: 10px">
              {data.children.map(childrenItem => this.getItem(childrenItem))}
            </li>
          </ul>
        </li >
      }
    },
    className(classObj = {}) {
      const arr = []
      Object.keys(classObj).forEach(key => {
        if (classObj[key]) {
          arr.push(key)
        }
      })
      return arr.join(' ')
    },
    foldChange(data) {
      if (!data.collapse) {
        data.collapse = true
      } else {
        data.collapse = false
      }
      this.$forceUpdate()
      this.$emit('collapseChange', data.collapse)
    },
    expandLoad(data) {
      data.isLoading = true
      this.$emit('expandLoad', data)
      this.$forceUpdate()
    },
    forceUpdate() {
      this.$forceUpdate()
    },
  },
  render() {
    // console.log('this.props:', this.$props.data)
    const data = this.$props.data
    // console.log('data:', data)
    // console.log('this.$props.data:', this.$props.data)
    return <ul>
      {
        data.map(dataItem =>
          this.getItem(dataItem)
        )
      }

    </ul>
  }
}