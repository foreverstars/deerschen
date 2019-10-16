<template>
  <div class="admin-usermanage">
    <Button type="primary" @click="create" style="margin: 15px;">新 增</Button>
    <Table border :columns="columns" :data="data">

    </Table>

    <Modal title="新增分类" v-model="dialogFormVisible" @on-ok="handleConfirm">
      <Form>
        <FormItem label="类别名称" >
          <Input v-model="form.name" auto-complete="off" style="width: 300px;" />
        </FormItem>
        <FormItem label="类别type" >
          <Input v-model="form.type" auto-complete="off" style="width: 300px;"/>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      columns: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: 'key',
          key: 'type'
        }
      ],
      data: [
      ],
      dialogFormVisible: false,
      form: {
        name: '',
        type: ''
      }
    }
  },
  methods: {
    ...mapActions(['getTypeList', 'addType']),
    getList(row) {
      this.getTypeList().then(res => {
        if (res.data.code === 0) {
          this.data = res.data.data
        } else {
        }
      })
    },
    create () {
      this.dialogFormVisible = true
    },
    handleConfirm () {
      this.addType(this.form).then(res => {
        if (res.data.code === 0) {
          this.dialogFormVisible = false
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
