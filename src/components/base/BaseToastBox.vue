<template>
    <div class="m-toast-box">
        <div id="m-toast-error" class="m-toast-msg m-toast-error" style="display: none">
            <div class="m-toast-icon"><i class="fas fa-exclamation-triangle"></i></div>
            <div class="m-toast-text">Xóa thành công</div>
            <div class="m-toast-close "><i class="fas fa-times"></i></div>
        </div>
        <div class="m-toast-msg m-toast-info" style="display: none">
            <div class="m-toast-icon"><i class="fas fa-info-circle"></i></div>
            <div class="m-toast-text">Thêm mới thành công</div>
            <div class="m-toast-close "><i class="fas fa-times"></i></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'toastbox'
}
</script>