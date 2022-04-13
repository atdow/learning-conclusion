/*
 * @Author: atdow
 * @Date: 2022-04-03 19:44:46
 * @LastEditors: null
 * @LastEditTime: 2022-04-03 21:21:13
 * @Description: file description
 */
import packagesJson from './packages.json'
import demoJson from './demo.json'
import docJson from './doc.json'

function jsonFormat(json) {
    return {
        ...json,
        groups: json.groups.map(groupsItem => {
            return {
                ...groupsItem,
                list: groupsItem.list.map(listItem => {
                    return {
                        ...listItem,
                        path: json.path + listItem.path
                    }
                })
            }
        })
    }
}


export default {
    'zh-CN': [
        jsonFormat(packagesJson),
        jsonFormat(demoJson),
        jsonFormat(docJson)
    ]
}