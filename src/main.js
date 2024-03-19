import { createApp } from 'vue'
import App from './App.vue'

import VueMarkdownEditor from 'v-md-editor';
import githubTheme from 'v-md-editor/lib/theme/github';
import VueMarkdownPreview from 'v-md-editor/lib/preview'


VueMarkdownEditor.use(githubTheme);
VueMarkdownPreview.use(githubTheme)

const app = createApp(App)
app.mount('#app')
app.use(VueMarkdownEditor)
app.use(VueMarkdownPreview)
