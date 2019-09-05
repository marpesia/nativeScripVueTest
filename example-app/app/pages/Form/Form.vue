<template>
    <Page>
        <ActionBar title="Mi first form"/>
        <StackLayout columns="*" rows="*">
            <Label class="message" :text="msg"/>
            <Label class="message" text="ey"/>
            <Label textWrap="true" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <Button text="list" @tap="$navigator.navigate('list')"/>
            <Button text="home" @tap="$navigator.navigate('home', { clearHistory: true })"/>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
  export default {
    name: 'form',
    data() {
      return {
        msg: 'My form'
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

    button {
      background-color: red;
    }
</style>
