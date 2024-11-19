<script lang="tsx">
  import  {defineComponent, ref} from 'vue'
  import { ElIcon, ElMessage, ElUpload, type UploadProps } from 'element-plus'
  import { Plus } from '@element-plus/icons-vue'
  import type { Result } from '@/dtypes'
  const API_PREFIX = import.meta.env.VITE_API_PREFIX

  export default defineComponent({
    name: 'ImageUpload',
    props: {
              modelValue: {type: String, default: ''},
              size: {type: String, default: ''}
    },

    setup(props,{emit}) {
      const loading = ref(false)
      const dialogImageUrl = ref('')
      const dialogVisible = ref(false)
      const handleImageSuccess: UploadProps['onSuccess'] = (response: Result<string>) => {
        loading.value = false
        emit('update:modelValue', response.result)
      }
      const types = ['image/png', 'image/jpeg', 'image/webp']

      const beforeImageUpload: UploadProps['beforeUpload'] = (rawFile) => {
        if (!types.includes(rawFile.type)) {
          ElMessage.error('Image picture must be JPG format!')
          return false
        } else if (rawFile.size / 1024 / 1024 > 2) {
          ElMessage.error('Image picture size can not exceed 2MB!')
          return false
        }
        loading.value = true
        return true
      }
      const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
        console.log(uploadFile, uploadFiles)
      }

      const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
        dialogImageUrl.value = uploadFile.url!
        dialogVisible.value = true
      }
      return ()=> (
          <>
            <el-upload
                // v-model:file-list="fileList"
                action={API_PREFIX + '/oss/upload'}
                list-type="picture-card"
                before-upload={beforeImageUpload}
                on-success={handleImageSuccess}
                on-preview={handlePictureCardPreview}
                on-remove={handleRemove}
            >
              <el-icon><Plus/></el-icon>
            </el-upload>

            <el-dialog v-model={dialogVisible}>
              <img w-full src={props.modelValue} alt="预览图片"/>
            </el-dialog>
          </>
            )
    },
    emits: ['update:modelValue']

    })
</script>


<style scoped lang="scss">

</style>