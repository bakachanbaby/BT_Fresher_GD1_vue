<template>
  <div class="m-popup">
    <div class="m-row">
      <div id="dlgPopup" class="m-dialog-modal" :class="{ isShow: isShow }">
        <div class="m-dialog">
          <!-- DIALOG HEADER -->
          <div class="m-dialog-header">
            <!-- DIALOG HEADER Left -->

            <div class="m-dialog-header-left">
              <!-- Title popup -->
              <div class="m-dialog-title">Thêm tài sản</div>
            </div>
            <!-- DIALOG HEADER right -->

            <div class="m-dialog-header-right">
              <!-- Icon đóng popup -->
              <div
                id="m-dialog-close"
                class="m-dialog-close"
                @click="btnCancelOnClick"
              ></div>
            </div>
          </div>
          <!-- DIALOG CONTENT -->
          <div class="m-dialog-content">
            <!-- Từng dòng của popup -->
            <div class="m-content-line">
              <!-- Bên trái của popup -->
              <div class="m-content-line-left">
                <div class="m-dialog-content-box">
                  <!-- Tittle content box -->
                  <div class="m-dialog-content-box-tittle">
                    Mã tài sản <strong>*</strong>
                  </div>
                  <!-- Input content box -->
                  <input
                    type="text"
                    name=""
                    id="m-employeeCode-txt"
                    class="m-input m-width-26"
                    fieldName="EmployeeCode"
                    v-model="customer.CustomerCode"
                    placeholder="Nhập mã tài sản"
                  />
                  <div
                    class="m-input-alert-error"
                    style="display: none; left: 5%"
                  >
                    Mã không được để trống
                  </div>
                </div>
              </div>
              <!-- Bên phải của popup -->
              <div class="m-content-line-right m-width-70">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Tên tài sản <strong>*</strong>
                  </div>
                  <input
                    type="text"
                    name=""
                    id="m-employeeFullName-txt"
                    class="m-input m-width-66"
                    fieldName="EmployeeName"
                    v-model="customer.FullName"
                    placeholder="Nhập tên tài sản"
                  />
                  <div class="m-input-alert-error" style="display: none">
                    Tên không được để trống
                  </div>
                </div>
              </div>
            </div>
            <div class="m-content-line">
              <div class="m-content-line-left">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Mã bộ phận sử dụng <strong>*</strong>
                  </div>
                  <select
                    class="m-combobox m-content-combobox m-width-30"
                    name=""
                  >
                    <option value="">HT</option>
                    <option value="">HTN</option>
                    <option value="">KHO</option>
                    <option value="">PBT</option>
                  </select>
                </div>
              </div>
              <div class="m-content-line-right m-width-70">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Tên bộ phận sử dụng
                  </div>
                  <input
                    type="text"
                    name=""
                    class="m-input m-width-66"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="m-content-line">
              <div class="m-content-line-left">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Mã loại tài sản <strong>*</strong>
                  </div>
                  <select
                    class="m-combobox m-content-combobox m-width-30"
                    name=""
                  >
                    <option value="">HT</option>
                    <option value="">HTN</option>
                    <option value="">KHO</option>
                    <option value="">PBT</option>
                  </select>
                </div>
              </div>
              <div class="m-content-line-right m-width-70">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Tên loại tài sản
                  </div>
                  <input
                    type="text"
                    name=""
                    class="m-input m-width-66"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="m-content-line">
              <div class="m-content-line-left">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Số lượng <strong>*</strong>
                  </div>
                  <input
                    type="number"
                    name=""
                    dir="rtl"
                    class="m-input m-width-26"
                  />

                </div>
              </div>
              <div class="m-content-line-right m-width-70">
                <div class="m-dialog-content-box ">
                  <div class="m-dialog-content-box-tittle">
                    Nguyên giá <strong>*</strong>
                  </div>
                  <input
                    type="text"
                    dir="rtl"
                    name=""
                    class="m-input m-width-30"
                  />
                </div>
                <div class="m-dialog-content-box ">
                  <div class="m-dialog-content-box-tittle">
                    Tỷ lệ hao mòn (%) <strong>*</strong>
                  </div>
                  <input
                    type="text"
                    dir="rtl"
                    name=""
                    class="m-input m-width-30"
                  />
                </div>
              </div>
            </div>
            <div class="m-content-line">
              <div class="m-content-line-left">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Ngày mua <strong>*</strong>
                  </div>
                  <input
                    type="date"
                    name=""
                    class="m-input m-width-26"
                  />

                </div>
              </div>
              <div class="m-content-line-right m-width-70">
                <div class="m-dialog-content-box ">
                  <div class="m-dialog-content-box-tittle">
                    Ngày bắt đầu sử dụng <strong>*</strong>
                  </div>
                  <input
                    type="date"
                    name=""
                    class="m-input m-width-30"
                  />
                </div>
                <div class="m-dialog-content-box ">
                  <div class="m-dialog-content-box-tittle">
                    Năm theo dõi <strong>*</strong>
                  </div>
                  <input
                    type="text"
                    name=""
                    dir="rtl"
                    class="m-input m-width-30"
                    placeholder="2021"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="m-content-line">
              <div class="m-content-line-left">
                <div class="m-dialog-content-box">
                  <div class="m-dialog-content-box-tittle">
                    Số năm sử dụng <strong>*</strong>
                  </div>
                  <input
                    type="number"
                    dir="rtl"
                    name=""
                    class="m-input m-width-26"
                  />

                </div>
              </div>
              <div class="m-content-line-right m-width-70">
                <div class="m-dialog-content-box ">
                  <div class="m-dialog-content-box-tittle">
                    Giá trị hao mòn năm <strong>*</strong>
                  </div>
                  <input
                    type="text"
                    dir="rtl"
                    name=""
                    class="m-input m-width-30"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- DIALOG FOOTER -->
          <div class="m-dialog-footer">
            <!-- Dialog footer left -->
            <div class="m-dialog-footer-left"></div>
            <!-- Dialog footer right -->
            <div class="m-dialog-footer-right">
              <!-- Btn thoát popup -->
              <button
                id="m-d-f-close"
                class="m-btn m-btn-nobg m-btn-footer"
                @click="btnCancelOnClick"
              >
                Hủy
              </button>
              <!-- Btn lưu thông tin popup -->
              <button
                id="m-d-f-save-add"
                class="m-btn m-btn-footer"
                @click="btnSaveOnClick"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import axios from "axios";
import BaseToastBox from '../../components/base/BaseToastBox.vue'
export default {
  name: "AssetDetail",
  component:{
    BaseToastBox
  },
  props: {
    bus: {},
    customerId: {
      default: null,
      type: String,
    },
    isShow: {
      default: false,
      type: Boolean,
    },
    CustomerCode: {
      default: null,
      type: String,
    },
  },
  mounted() {
    this.bus.$on("getNewCustomerCode", this.getNewCustomerCode);
  },
  methods: {
    btnCancelOnClick: function () {
      // this.customer = null;
      // this.customerId = null;
      this.$emit("ShowDialog", false);
    },
    dateChange: function () {
      var datePicked = event.target.value;
      this.customer.dateOfBirth = new Date(datePicked);
    },
    btnSaveOnClick: function () {
      var me = this;
      // Build customer:
      let inputs = document.querySelectorAll(
        "#dlgPopup .m-dialog-content-box .m-input"
      );
      // console.log(inputs);
      for (const input of inputs) {
        let fieldName = input.getAttribute("fieldName");
        let value = input.value;
        me.customer[fieldName] = value;
      }

      if (this.customerId == null) {
        axios
          .post("http://cukcuk.manhnv.net/api/v1/Customerss", me.customer)
          .then(function (res) {
            // me.customer = res.data;
            console.log(res);
            this.$emit("ShowDialog", false);
          })
          .catch(function (res) {
            console.log(res);
            this.$emit("ShowDialog", false);
          });
      } else {
        axios
          .put(
            `http://cukcuk.manhnv.net/api/v1/Customerss/${me.customerId}`,
            me.customer
          )
          .then(function () {
            this.$emit("ShowDialog", false);
          })
          .catch(function (res) {
            console.log(res);
            this.$emit("ShowDialog", false);
          });
      }

    },
    getNewCustomerCode() {
      this.customer = {};
      var me = this;
      axios
        .get(`http://cukcuk.manhnv.net/api/v1/Customerss/NewCustomerCode`)
        .then(function (res) {
          me.customer = {};
          me.customer.CustomerCode = res.data;
        })
        .catch(function (res) {
          console.log(res);
        });
    },
  },
  watch: {
    customerId: function (val) {
      console.log(val);
      var me = this;
      if (val != null) {
        // Goi api lay du lieu tuong ung voi khach hang
        axios
          .get(`http://cukcuk.manhnv.net/api/v1/Customerss/${val}`)
          .then(function (res) {
            me.customer = res.data;
          })
          .catch(function (res) {
            console.log(res);
          });
      } else {
        alert("Lấy id mới cho khách hàng");
      }
    },
  },
  filters: {
    formatYYYYMMDD(val) {
      // console.log(val);
      if (val) {
        const dateOfBirth = new Date(val);
        let day = dateOfBirth.getDate();
        day = day < 10 ? `0${day}` : day;
        let month = dateOfBirth.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dateOfBirth.getFullYear();
        return `${year}-${month}-${day}`;
      } else return "";
    },
  },
  beforeDestroy() {
    //   Reset lại giá trị id
    this.customerId = null;
  },
  data() {
    return {
      // CustomerCode: null,
      customer: { CustomerCode: null },
      //   customerId: null,
    };
  },
};
</script>