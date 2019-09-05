<template>
    <Page>
        <ActionBar title="list"/>
        <StackLayout columns="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0"/>
            <Button text="back" @tap="$navigator.back()"/>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
  export default {
    name: 'list',
    data() {
      return {
        msg: 'My list'
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
