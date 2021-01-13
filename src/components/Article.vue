<template>
  <div class="cantainer">
    <el-row>
      <el-input
        placeholder="请输入内容"
        v-model="search_input" >
        <i slot="suffix" class="el-input__icon el-icon-search" @click="qryArticleList()"></i>
      </el-input>
    </el-row>
    <el-table style="width: 100%;"
              :data="dataList">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column label="标题"  width="180">
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank" class="buttonText">{{scope.row.title}}</a>
        </template>
      </el-table-column>
      <el-table-column label="作者" prop="author" width="180">
      </el-table-column>
      <el-table-column label="日期" prop="createTime" width="180">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
  </div>
</template>

<script>/* eslint-disable */
  export default {
    name: 'Article',
    data () {
      return {
        currentPage:1,
        pageSize:10,
        totalCount:0,
        dataList: [],
        search_input:"",
      }
    },
    created() {
      this.handleCurrentChange(this.currentPage);
    },
    methods: {
      handleSizeChange: function (pageSize) {
        this.pageSize = pageSize;
        this.currentPage = 1;
        this.handleCurrentChange(this.currentPage);
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
          this.dataList = [{url:"http://www.w3school.com.cn",title:"W3School",author:"tzs",createTime:"2021-01-10"}];
          this.totalCount = 1;
      },
      qryArticleList:function () {
        alert(this.search_input)
      }
    }
  }
</script>
