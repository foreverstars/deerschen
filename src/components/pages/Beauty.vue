<template>
  <div class="admin-beauty">
      <Tabs :value="currentPane">
        <TabPane label="编程" name="program" >
          <admin-program></admin-program>
        </TabPane>
        <TabPane label="读书" name="reading" >
          <admin-reading></admin-reading>
        </TabPane>
        <TabPane label="经济学" name="economics" >
          <admin-economics></admin-economics>
        </TabPane>
        <TabPane label="随笔" name="essay">
          <admin-essay></admin-essay>
        </TabPane>
        <TabPane label="留言" name="message">
          <admin-message></admin-message>
        </TabPane>
      </Tabs>
  </div>
</template>


<script>
import Program from './Program'
import Reading from './Reading'
import Economics from './Economics'
import Essay from './Essay'
import Message from './Message'

export default {
  data() {
    return {
      currentPane: 'program'
    }
  },
  components: {
    'admin-program': Program,
    'admin-reading': Reading,
    'admin-economics': Economics,
    'admin-essay': Essay,
    'admin-message': Message
  }
}
</script>

<style lang="scss" scoped>
  .admin-beauty{
    padding:0 10px 10px 10px;
  }
</style>

