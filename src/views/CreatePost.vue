<template>
  <div>
    <WMHeader></WMHeader>
    <MarkdownEditor></MarkdownEditor>

    <WMFooter></WMFooter>
  </div>
</template>

<script>
  import WMHeader from '../components/WMHeader'
  import WMFooter from '../components/WMFooter'
  import MarkdownEditor from '../components/MarkdownEditor'
  export default {
    components: {
      WMHeader,
      WMFooter,
      MarkdownEditor
    }
  }
</script>
