<template>
    <Page>
        <Navigator defaultRoute="/home" />
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <StackLayout>
            <Label class="message" :text="msg"/>
            <Button text="list" @tap="$navigator.navigate('list')"/>
            <Button text="form" @tap="$navigator.navigate('form')"/>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        msg: 'Hello World!'
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
