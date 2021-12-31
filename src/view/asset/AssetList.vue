<template>
  <div class="content">
    <!-- CONTENT TABLE -->
    <div class="m-content-table">
      <!-- Content search -->
      <div class="m-content-search">
        <div class="m-content-search-left">
          <div class="m-row m-l-search m-width-27">
            <input
              type="text"
              class="m-input m-input-search"
              name=""
              id="txtSearch"
              placeholder="Tìm kiếm tài sản"
            />
          </div>
          <select class="m-combobox m-combobox-search m-width-30" name="">
            <option value="">Loại tài sản</option>
            <option value="">HTN</option>
            <option value="">KHO</option>
            <option value="">PBT</option>
          </select>
          <select class="m-combobox m-combobox-search m-width-30" name="">
            <option value="">Bộ phận sử dụng</option>
            <option value="">HTN</option>
            <option value="">KHO</option>
            <option value="">PBT</option>
          </select>
        </div>
        <div class="m-content-search-right">
          <div class="m-row">
            <!-- <base-btn /> -->
            <button id="m-btn-add-ele" class="m-btn" @click="btnAddOnClick">
              <div class="m-btn-text">+ Thêm tài sản</div>
            </button>
          </div>
          <div id="btnExcel" class="m-content-excel">
            <div class="m-btn-excel"></div>
          </div>
          <div id="btnDelete" class="m-content-delete">
            <div class="m-btn-delete"></div>
          </div>
        </div>
      </div>

      <!-- Content table -->
      <div class="m-content-box">
        <div class="m-row m-content-table-box">
          <div class="m-grid">
            <table id="tbdlEmloyeesList" class="m-table">
              <thead>
                <tr>
                  <th class="text-align-center" style="width: 25px !important">
                    <input type="checkbox" />
                  </th>
                  <th class="text-align-center" style="width: 25px !important">
                    STT
                  </th>

                  <th class="text-align-left" style="width: 125px">
                    Mã tài sản
                  </th>
                  <th class="text-align-left" style="width: 150px">
                    Tên tài sản
                  </th>
                  <th class="text-align-left" style="width: 125px">
                    Loại tài sản
                  </th>
                  <th class="text-align-left">Bộ phận sử dụng</th>
                  <th class="text-align-right" style="width: 100px">
                    Số lượng
                  </th>
                  <th class="text-align-center" style="width: 100px">
                    Nguyên giá
                  </th>
                  <th class="text-align-center" style="width: 150px">
                    HM/KH lũy kế
                  </th>
                  <th class="text-align-center" style="width: 150px">
                    Giá trị còn lại
                  </th>

                  <th class="text-align-center" style="width: 100px">
                    Chức năng
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(c, i) in customers"
                  :key="c.CustomerId"
                  @dblclick="rowOnDblClick(c.CustomerId)"
                >
                  <td class="text-align-center"><input type="checkbox" /></td>
                  <td class="text-align-left">{{ i + 1 }}</td>
                  <td class="text-align-left">{{ c.CustomerCode }}</td>
                  <td class="text-align-left">{{ c.FullName }}</td>
                  <td class="text-align-left">{{ c.Email }}</td>
                  <td class="text-align-left">{{ c.FullName }}</td>
                  <td class="text-align-right">{{ i + 1 }}</td>
                  <!-- <td class="text-align-center">
                  {{ formatDataComputed }}
                </td> -->
                  <!-- methods -->
                  <td class="text-align-right">
                    {{ formatDate(c.DateOfBirth) }}
                  </td>
                  <!-- filters -->
                  <!-- <td class="text-align-center">
                  {{ c.DateOfBirth | formatDate(c.DateOfBirth) }}
                </td> -->
                  <td class="text-align-right">{{ c.PhoneNumber }}</td>
                  <td class="text-align-right">{{ c.Address }}</td>
                  <td class="text-align-right">
                    <div class="m-content-table-row-setting">
                      <div class="m-content-btn-change"></div>
                      <div class="m-content-btn-copy"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="m-paging">
          <div class="m-paging-left">
            <div class="m-paging-record">
              <p>Tổng số:<strong id="totalRecord"> 8 </strong> bản ghi</p>
            </div>
            <select class="m-combobox combobox-count" name="" id="cbxPageSize">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <div class="m-paging-hover m-paging-prev"></div>
            <div class="m-paging-number">
              <div class="m-paging-hover page-number page-number-active">1</div>
              <div class="m-paging-hover page-number">2</div>
              <div class="m-paging-hover page-number">3</div>
            </div>
            <div class="m-paging-hover m-paging-next"></div>
          </div>
          <div class="m-paging-right"></div>
        </div>
      </div>

      <!-- Content paging -->
    </div>
    <AssetDetail
      :isShow="isShowDialog"
      :customerId="customerIdSelected"
      @ShowDialog="ShowDialog"
      :CustomerCode="NewCustomerCode"
      :bus="bus"
    />
  </div>
</template>
// <script>
// import BaseBtn from "../base/BaseBtn.vue";
import Vue from "vue";
import axios from "axios";
import AssetDetail from "../../view/asset/AssetDetail.vue";
export default {
  components: {
    AssetDetail,
    //   BaseBtn
  },
  comments: {
    // BaseBtn,
  },
  created() {
    var me = this;
    // Goi api lay du lieu:
    axios
      .get("http://cukcuk.manhnv.net/api/v1/Customerss")
      .then(function (e) {
        console.log(e);
        me.customers = e.data;
      })
      .catch(function (e) {
        console.log(e);
      });
  },
  computed: {
    formatDataComputed(val) {
      if (val) {
        const dateOfBirth = new Date(val);
        let day = dateOfBirth.getDate();
        day = day < 10 ? `0${day}` : day;
        let month = dateOfBirth.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dateOfBirth.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
  },
  methods: {
    // Thực hiện hiển thị dialog
    ShowDialog(isShow) {
      this.isShowDialog = isShow;
    },
    formatDate(val) {
      if (val) {
        const dateOfBirth = new Date(val);
        let day = dateOfBirth.getDate();
        day = day < 10 ? `0${day}` : day;
        let month = dateOfBirth.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dateOfBirth.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
    btnAddOnClick: function () {
      this.bus.$emit("getNewCustomerCode");
      // Lay ma moi
      // var me = this;
      // axios
      //   .get(`http://cukcuk.manhnv.net/api/v1/Customerss/NewCustomerCode`)
      //   .then(function (res) {
      //     me.NewCustomerCode = res.data + "";
      //   })
      //   .catch(function (res) {
      //     console.log(res);
      //   });
      this.ShowDialog(true);
      // this.isShowDialog = true;
      // document.getElementById("dlgPopup").style.display = "block";
    },
    rowOnDblClick: function (customerId) {
      this.ShowDialog(true);
      this.customerIdSelected = customerId;
      // document.getElementById("dlgPopup").style.display = "block";

      // alert(customerId)
    },
  },
  filters: {
    formatDate(val) {
      if (val) {
        const dateOfBirth = new Date(val);
        let day = dateOfBirth.getDate();
        day = day < 10 ? `0${day}` : day;
        let month = dateOfBirth.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dateOfBirth.getFullYear();
        return `${day}/${month}/${year}`;
      } else return "";
    },
  },
  data() {
    return {
      bus: new Vue(),
      isShowDialog: false,
      customerIdSelected: null,
      dateOfBirth: null,
      customers: null,
      NewCustomerCode: null,
    };
  },
};
</script>