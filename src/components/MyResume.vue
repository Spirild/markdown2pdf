<template>  
    <div id="app">
      <div v-if="!isEditing && !isPrint"> 
        <button @click="editMarkdown" class="editor-controls">编辑</button>
        <button @click="printMarkdown" class="editor-controls">打印</button>
      </div>
      <div v-if="!isEditing" v-html=markdownHtml class="md-main markdown-body"></div>
      <!-- <v-md-editor v-model="markdownContent" style="min-height: 600px"/> -->
      <div v-if="isEditing">  
          <button @click="saveMarkdown"  class="editor-controls">保存</button>  
          <button @click="cancelEdit"  class="editor-controls">取消</button>  
        </div>
      <div class="md-main">
        <v-md-editor v-if="isEditing" v-model="markdownContent" style="min-height: 600px" @change="change" />
      </div>
      
      
    </div>  
  </template>  
    
<script> 
import markdownIt from 'markdown-it'
// import HttpRequest, { MarkdownRequest } from '../http/http_request'


export default {
    data() {  
      return {
        isEditing: false,
        isChange: false,
        isPrint: false,
        markdownContent: '', // 这里是您的 Markdown 内容
        markdownCache: '',
        markdownHtml: '',
        md: markdownIt({  
          html: true,  
          linkify: true,  
          typographer: true,  
        }), 
      }  
    }, 
    created() {
        this.loadMarkdown()
    },
    methods: {
      renderedMarkdown() {
        this.markdownHtml = this.md.render(this.markdownContent)
      },

      editMarkdown() {  
        this.isEditing = true;
        this.markdownCache = this.markdownContent 
      }, 
      cancelEdit() {
        this.markdownContent = this.markdownCache
        this.isEditing = false; // 取消编辑，回到显示状态
        this.isChange = false
        this.renderedMarkdown()
      },  
      async loadMarkdown() {
        // var res = await HttpRequest.commonGet('/getMarkdown')
        // this.markdownContent = res.markdown_content
        this.renderedMarkdown()
      },
      async saveMarkdown() {  
        // 这里是保存Markdown内容的逻辑
        // if(this.isChange) {
        //   await MarkdownRequest.saveMarkdown( this.markdownContent )
        // }
        this.isEditing = false; // 保存后退出编辑状态  
        this.isChange = false
        this.renderedMarkdown()
      }, 
      change() {
        // this.markdownHtml = render
        this.isChange = true
      },
      printMarkdown() {
        this.isPrint = true
        window.print()
        this.isPrint = false
      }
    }  
  }  
  </script>
    
<style scoped>
/* @import "../assets/css/markdown.css"; */
@import 'v-md-editor/lib/theme/style/github.css';
@import 'v-md-editor/lib/style/base-editor.css';
/* @import 'v-md-editor/lib/style/preview.css'; */

.md-main {
  flex-direction: column;
  text-align: left;
}
.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: #24292e;
  line-height: 1.5;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}
.editor-controls {
  margin-left: 10px;
  margin-right: 10px;
}
</style>