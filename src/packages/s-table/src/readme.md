<!--
 * @Author: atdow
 * @Date: 2022-05-07 16:06:18
 * @LastEditors: null
 * @LastEditTime: 2023-03-22 11:51:33
 * @Description: s-table组件文档说明
-->

## 简介

这是基于 `element table` 的弱封装，只封装了 table 请求部分，其他部分不影响原有的功能

## 使用

### 1.静态数据使用方式

表格封装了分页组件，直接传静态数据就会自动分页

```vue
<template>
    <div>
        <sino-table :data="tableData" border ref="tableRef">
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column prop="operation" label="操作" fixed="right">
                <template slot-scope="scope">
                    <el-button type="danger" @click="deleteRow">删除</el-button>
                </template>
            </el-table-column>
        </sino-table>
    </div>
</template>
 
<script>
import { getTable } from '@/api/table.js';
export default {
    name: '',
    data() {
        return {
            tableData: [{ date: 'date', name: 'name' }],
        };
    },
};
</script>
```

### 2.异步使用方式

#### 2.1.基础使用

```vue
<template>
    <div>
        <sino-table :data="tableDataFn" :isDefaultRefresh="true" border ref="tableRef">
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column prop="operation" label="操作" fixed="right">
                <template slot-scope="scope">
                    <el-button type="danger" @click="deleteRow">删除</el-button>
                </template>
            </el-table-column>
        </sino-table>
    </div>
</template>
 
<script>
import { getTable } from '@/api/table.js';
export default {
    name: '',
    data() {
        return {
            tableDataFn: function (parameter) {
                const params = {}; // 你需要混入除table自身请求所需之外的其他参数
                return getTable(Object.assign(parameter, params)).then((res) => {
                    /**
                     * 返回标准的table数据结构
                     * {
                     *      pageSize: 10,
                            pageNo: 1,
                            totalCount: 100,
                            totalPage: 10,
                            data: [],
                    * }
                    */
                    return res.data.data;
                });
            },
        };
    },
};
</script>
```

#### 2.1.延迟请求

`isDefaultRefresh`设置为 `false`或者不传，然后在其他时机调用 `this.$refs.tableRef.refresh(true)`刷新列表请求

> `isDefaultRefresh`设置为 `true`时，table 将会在创建完毕后自定去请求第一页数据；如果需要异步或者有其他默认参数混入到 table 中去请求第一页数据时，就需要使用 `延迟请求`。

```vue
<template>
    <div>
        <sino-table :data="tableDataFn" :isDefaultRefresh="false" border ref="tableRef">
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column prop="operation" label="操作" fixed="right">
                <template slot-scope="scope">
                    <el-button type="danger" @click="deleteRow">删除</el-button>
                </template>
            </el-table-column>
        </sino-table>
    </div>
</template>
 
<script>
import { getTable } from '@/api/table.js';
export default {
    name: '',
    data() {
        return {
            tableDataFn: function (parameter) {
                const params = {}; // 你需要混入除table自身请求所需之外的其他参数
                return getTable(Object.assign(parameter, params)).then((res) => {
                    /**
                     * 返回标准的table数据结构
                     * {
                     *      pageSize: 10,
                            pageNo: 1,
                            totalCount: 100,
                            totalPage: 10,
                            data: [],
                    * }
                    */
                    return res.data.data;
                });
            },
        };
    },
    mounted() {
        setTimeout(() => {
            this.$refs.tableRef.refresh(true);
        }, 3000);
    },
};
</script>
```

### 3.刷新列表

-   `this.$refs.tableRef.refresh()`: 刷新列表当前页
-   `this.$refs.tableRef.refresh(true)`: 刷新列表到第一页
-   `this.$refs.tableRef.refresh(false,5)`: 刷新列表到第 5 页

### 4.el-table 默认其他使用

> 该组件是基于 `el-table`的弱封装

-   props 传参跟原生 `el-table`的参数一致
-   调用方法跟原生 `el-table`一致，例如 `this.$refs.tableRef.clearSelection()`
-   表格 `emit` 方法需要自己手动到组件中绑定，因为不能完美继承到原生`el-table`方法，比如`row-click`就无法继承到
