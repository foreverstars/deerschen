<template>
  <div class="admin-usermanage">
    <Table border :columns="columns" :data="data">

    </Table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { adminOptions } from '@/utils/dict.js'

export default {
  data() {
    return {
      columns: [
        {
          title: '用户名',
          key: 'username'
        },
        {
          title: '角色',
          key: 'isAdmin',
          render: (h, params) => {
            const value = adminOptions.find(v => params.row.isAdmin === v.value) ?
              adminOptions.find(v => params.row.isAdmin === v.value).name : ''
            return h('span', value)
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.row)
                  }
                }
              }, '修改')
            ]);
          }
        }
      ],
      data: [
      ]
    }
  },
  methods: {
    ...mapActions(['getUserList', 'setUserNormal', 'setUserAdmin']),
    show(row) {
      const content = row.isAdmin === 1 ? '取消管理员身份?' : '设置为管理员?'
      this.$Modal.confirm({
        title: '提示',
        content: content,
        onOk: () => {
          if (row.isAdmin === 1) {
            this.setUserNormal(row).then(() => {
              this.getList()
            })
          } else {
            this.setUserAdmin(row).then(() => {
              this.getList()
            })
          }
        },
        onCancel: () => {
          console.log('cancel')
        }
      })
    },

    getList () {
      this.getUserList().then(res => {
        if (res.data.code === 0) {
          this.data = res.data.data
        } else {
        }
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>


<style lang="scss" scoped>
  .admin-article{
    padding:0 10px 10px 10px;
  }
</style>
