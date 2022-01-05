<template>
  <div class="content">
    <!-- CONTENT TABLE -->
    <div class="m-content-table">
      <!-- Content search -->
      <div class="m-content-search">
        <div class="m-content-search-left">
          <!-- Input search -->
          <BaseInputSearch ></BaseInputSearch>
          <!-- Combobox: Loại tài sản -->
          <BaseCombobox :nameCombobox="nameCB1" :val1="val1" :val2="val2" :val3="val3"></BaseCombobox>
          <!-- Combobox: Bộ phận sử dụng -->
          <BaseCombobox :nameCombobox="nameCB2" :val1="val1" :val2="val2" :val3="val3"></BaseCombobox>
        </div>
        <div class="m-content-search-right">
          <div class="m-row">
            <!-- Btn show PopUp -->
            <BaseBtn
              :BtnText="btnText"
              :BtnAddOnClick="btnAddOnClick"
            ></BaseBtn>
          </div>
            <!-- Btn excel -->
          <div id="btnExcel" class="m-content-excel">
            <div class="m-btn-excel"></div>
          </div>
            <!-- Btn delete -->
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
              <!-- Thead -->
              <thead>
                <tr>
                  <th class="text-align-center" style="width: 25px !important">
                    <input type="checkbox" />
                  </th>
                  <th class="text-align-center" style="width: 25px !important">
                    STT
                  </th>

                  <th class="text-align-left" style="width: 150px">
                    Mã tài sản
                  </th>
                  <th class="text-align-left" style="width: 200px">
                    Tên tài sản
                  </th>
                  <th class="text-align-left">
                    Loại tài sản
                  </th>
                  <th class="text-align-left" style="width: 150px">Bộ phận sử dụng</th>
                  <th class="text-align-right" style="width: 100px">
                    Số lượng
                  </th>
                  <th class="text-align-right" style="width: 125px">
                    Nguyên giá
                  </th>
                  <th class="text-align-right" style="width: 150px">
                    HM/KH lũy kế
                  </th>
                  <th class="text-align-right" style="width: 150px">
                    Giá trị còn lại
                  </th>

                  <th class="text-align-center" style="width: 100px">
                    Chức năng
                  </th>
                </tr>
              </thead>
              <!-- T body -->
              <tbody>
                <tr
                  v-for="(a, i) in assets"
                  :key="a.fixed_asset_id"
                  @dblclick="rowOnDblClick(a.fixed_asset_id)"
                >
                  <td class="text-align-center"><input type="checkbox" /></td>
                  <td class="text-align-center">{{ i + 1 }}</td>
                  <td class="text-align-left"> {{a.fixed_asset_code}} </td>
                  <td class="text-align-left">{{a.fixed_asset_name}}</td>
                  <td class="text-align-left">{{a.fixed_asset_category_name}}</td>
                  <td class="text-align-left"> {{a.department_name}} </td>
                  <td class="text-align-right">{{ a.quantity }}</td>
                  <td class="text-align-right"> {{a.cost}} </td>
                  <td class="text-align-right"> {{(a.cost * a.depreciation_rate / 100).toFixed(0)}} </td>
                  <td class="text-align-right"> {{(a.cost - (a.cost * a.depreciation_rate / 100)).toFixed(0) }} </td>
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
        <!-- Footer Paging -->
        <div class="m-paging">
          <div class="m-paging-left">
            <!-- Tổng bản ghi -->
            <div class="m-paging-record">
              <p>Tổng số: 30 bản ghi</p>
            </div>
            <!-- Số bản ghi 1 trang -->
            <select class="m-combobox combobox-count" name="" id="cbxPageSize">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <!-- Icon trước trang -->
            <div class="m-paging-hover m-paging-prev"></div>
            <!-- Icon Số trang -->
            <div class="m-paging-number">
              <div class="m-paging-hover page-number page-number-active">1</div>
              <div class="m-paging-hover page-number">2</div>
              <div class="m-paging-hover page-number">3</div>
            </div>
            <!-- Icon sau trang -->
            <div class="m-paging-hover m-paging-next"></div>
          </div>
          <!-- Tổng số liệu -->
          <div class="m-paging-right">
            <div class="m-paging-right-quantily text-align-right m-paging-0-8" style="width: 100px">15</div>
            <div class="m-paging-right-price text-align-right m-paging-0-8" style="width: 125px">249.000.000</div>
            <div class="m-paging-right-accumulated text-align-right m-paging-0-8" style="width: 150px">19.716.000</div>
            <div class="m-paging-right-value text-align-right m-paging-0-8" style="width: 150px">229.284.000</div>
            <div style="width: 100px"></div>
          </div>
        </div>
      </div>

      <!-- Content paging -->
    </div>
    <AssetDetail
      :isShow="isShowDialog"
      :fixed_asset_id="assetsIdSelected"
      @ShowDialog="ShowDialog"
      :fixed_asset_code="NewAssetCode"
      :bus="bus"
    />
  </div>
</template>
// <script>
import BaseInputSearch from '../../components/base/BaseInputSearch.vue'
import BaseCombobox from '../../components/base/BaseCombobox.vue'
import BaseBtn from '../../components/base/BaseBtn.vue'

import Vue from "vue";
import axios from "axios";
import AssetDetail from "../../view/asset/AssetDetail.vue";
export default {
  name:'theContent',

  components: {
    BaseInputSearch,
    BaseCombobox,
    BaseBtn,
    AssetDetail,
  },
  comments: {
  },
  created() {
    var me = this;
    // Goi api lay du lieu:
    axios
      .get("http://localhost:5147/api/v1/FixedAsset")
      .then(function (e) {
        // console.log(e);
        
        me.assets = e.data;
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
      this.bus.$emit("getNewAssetCode");
      this.ShowDialog(true);

    },
    rowOnDblClick: function (fixed_asset_id) {
      this.ShowDialog(true);
      this.assetsIdSelected = fixed_asset_id;
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
      // Data combobox
      nameCB1:'Loại tài sản',
      nameCB2:'Bộ phận sử dụng',
      val1:'HTN',
      val2:'KHO',
      val3:'PBT',
      // Data btn
      btnText:'+ Thêm tài sản',

      bus: new Vue(),
      isShowDialog: false,
      assetsIdSelected: null,
      dateOfBirth: null,
      assets: null,
      NewAssetCode: null,
    };
  },
};
</script>