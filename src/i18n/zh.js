export default {
    ra: {
        action: {
            add_filter: '添加过滤器',
            add: '添加',
            back: '返回',
            bulk_actions: '选中 1 |||| 选中 %{smart_count}',
            cancel: '取消',
            clear_input_value: '清除',
            clone: '克隆',
            confirm: '确认',
            list: '列表',
            refresh: '刷新',
            remove_filter: '移除过滤器',
            remove: '删除',
            search: '搜索',
            show: '显示',
            undo: '撤销',
            expand: '扩展',
            close: '关闭',
            open_menu: '打开菜单',
            close_menu: '关闭菜单',
            create: '创建',
            edit: '编辑',
            export: '导出',
            unselect: '未选中',
            sort: '排序',
            save: '保存',
            delete: '删除',
        },
        boolean: {
            true: '是',
            false: '否',
            null: '',
        },
        page: {
            create: '创建 %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            error: '出错了',
            list: '%{name}',
            loading: '加载中',
            not_found: '未找到',
            show: '%{name} #%{id}',
            empty: '还没有 %{name}.',
            invite: '要添加一个吗?',
        },
        input: {
            file: {
                upload_several:
                    'Drop some files to upload, or click to select one.',
                upload_single: 'Drop a file to upload, or click to select it.',
            },
            image: {
                upload_several:
                    'Drop some pictures to upload, or click to select one.',
                upload_single:
                    'Drop a picture to upload, or click to select it.',
            },
            references: {
                all_missing: 'Unable to find references data.',
                many_missing:
                    'At least one of the associated references no longer appears to be available.',
                single_missing:
                    'Associated reference no longer appears to be available.',
            },
            password: {
                toggle_visible: '隐藏密码',
                toggle_hidden: '显示密码',
            },
        },
        message: {
            about: '关于',
            are_you_sure: '你确认?',
            bulk_delete_content:
                '你确认要删除 %{name}? |||| 你确认要删除 %{smart_count} 个记录?',
            bulk_delete_title:
                'Delete %{name} |||| Delete %{smart_count} %{name}',
            delete_content: '你确认要删除这个吗?',
            delete_title: 'Delete %{name} #%{id}',
            details: '详情',
            error:
                "A client error occurred and your request couldn't be completed.",
            invalid_form: 'The form is not valid. Please check for errors',
            loading: 'The page is loading, just a moment please',
            no: '否',
            not_found:
                '您访问了错误的链接或者数据已经不存在',
            yes: '是',
            unsaved_changes:
                "一些修改没有保存, 你确认要忽略吗?",
        },
        navigation: {
            no_results: '没有找到记录',
            no_more_results:
                '当前 %{page} 页已经超过边界. 试试返回前一页.',
            page_out_of_boundaries: '页数 %{page} 超过边界',
            page_out_from_end: '已经到最后一页',
            page_out_from_begin: '已经到第一页',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            page_rows_per_page: '每页记录数:',
            next: '下一页',
            prev: '上一页',
        },
        sort: {
            sort_by: 'Sort by %{field} %{order}',
            ASC: '顺序',
            DESC: '倒序',
        },
        auth: {
            auth_check_error: '请登录',
            user_menu: '详情',
            username: '用户名',
            password: '密码',
            sign_in: '登入',
            sign_in_error: '认证失败, 请重试',
            logout: '登出',
        },
        notification: {
            updated: '记录已更新 |||| %{smart_count} 个记录呗更新',
            created: '记录已创建',
            deleted: '记录删除 |||| %{smart_count} 个记录删除',
            bad_item: '不正确的记录',
            item_doesnt_exist: '记录不存在',
            http_error: '服务链接错误',
            data_provider_error:
                'dataProvider error. Check the console for details.',
            i18n_error:
                'Cannot load the translations for the specified language',
            canceled: '操作取消',
            logged_out: '您的会话已经结束, 请重新连接',
        },
        validation: {
            required: '必选',
            minLength: '长度不能少于 %{min}',
            maxLength: '长度不能大于 %{max}',
            minValue: '最小 %{min}',
            maxValue: '不能超过 %{max}',
            number: '必须位数字',
            email: '必须位合适的email',
            oneOf: '必须是 %{options} 中的一个',
            regex: '必须匹配 (regexp): %{pattern}',
        },
    },
    pos: {
        search: '搜索',
        configuration: '设置',
        menu: {
            sales: 'Sales',
            catalog: 'Catalog',
            customers: 'Customers',
            assetsManagement: '资产管理',
            system: '系统管理',
        },
    },
    resources: {
        users: {
            name: '用户管理',
            title: '用户 %{name}',
            fields: {
                zoneName: '区名称',
                viewName: '视图名称',
                defaultTtl: '默认TTL',
                createTime: '创建时间',
            },
        },
        assets: {
            name: '资产管理',
            title: '资产 %{name}',
            fields: {
                zoneName: '区名称',
                viewName: '视图名称',
                defaultTtl: '默认TTL',
                createTime: '创建时间',
            },
        },
        datacenters: {
            name: '数据中心管理',
            title: '数据中心 %{name}',
            fields: {
                zoneName: '区名称',
                viewName: '视图名称',
                defaultTtl: '默认TTL',
                createTime: '创建时间',
            },
        },
        departments: {
            name: '部门管理',
            title: '部门 %{name}',
            fields: {
                zoneName: '区名称',
                viewName: '视图名称',
                defaultTtl: '默认TTL',
                createTime: '创建时间',
            },
        },
        deviceclasses: {
            name: '设备分类管理',
            title: '设备分类 %{name}',
            fields: {
                zoneName: '区名称',
                viewName: '视图名称',
                defaultTtl: '默认TTL',
                createTime: '创建时间',
            },
        },
        devicemodels: {
            name: '设备模型管理',
            title: '设备模型 %{name}',
            fields: {
                zoneName: '区名称',
                viewName: '视图名称',
                defaultTtl: '默认TTL',
                createTime: '创建时间',
            },
        },
    },
};
