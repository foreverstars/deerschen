<template>
  <div>
    <Table border :columns="columns" :data="data">

    </Table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { typeOptions } from '@/utils/dict.js'
import moment from 'moment'
export default {
  data() {
    return {
      columns: [
        {
          title: '文章标题',
          key: 'title'
        },
        {
          title: '类别',
          key: 'type',
          render: (h, params) => {
            const value = typeOptions.find(v => params.row.type === v.value) ?
              typeOptions.find(v => params.row.type === v.value).name : ''
            return h('span', value)
          }
        },
        {
          title: '创建时间',
          key: 'time'
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
              }, '查看')
            ,  h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.delete(params.row)
                  }
                }
              }, '删除')]);
          }
        }
      ],
      data: [
      ]
    }
  },
  created () {
    this.getTypeList({
      type: 'reading'
    }).then(res => {
      if (res.data.code === 0) {
        this.data = res.data.data
      } else {
      }
    })
  },
  methods: {
    ...mapActions(['getTypeList', 'deleteArticle']),
    show(row) {
      console.log(row.id)
    },
    delete(row) {
      this.$Modal.confirm({
        title: '提示',
        content: '确定要删除该文章吗？',
        onOk: () => {
          this.deleteArticle({
            _id: row._id
          }).then(() => {
            this.getTypeList({
              type: 'reading'
            }).then(res => {
              if (res.data.code === 0) {
                this.data = res.data.data
              } else {
              }
            })
          })
        },
        onCancel: () => {
          console.log('cancel')
        }
      })
    },
  }
}
</script>
