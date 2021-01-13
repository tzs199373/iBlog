<template>
  <div class="cantainer">
    <el-row>
      <el-input
        placeholder="标题关键字"
        v-model="search_input" >
        <i slot="suffix" class="el-input__icon el-icon-search" @click="qryArticleList()"></i>
      </el-input>
    </el-row>
    <el-table style="width: 100%;"
              :data="showList">
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
        totalCount:2,
        dataList : [
          {url:"./mysql存储结构简单剖析.html",title:"mysql存储结构简单剖析",author:"tzs",createTime:"2021-01-10"},
          {url:"./mysql存储流程简单剖析.html",title:"mysql存储流程简单剖析",author:"tzs",createTime:"2021-01-10"}
        ],
        search_input:"",
        showList:[]
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
        this.showList = this.dataList;
      },
      qryArticleList:function () {
        this.showList = [];

        let _search_input = this.search_input;
        let _showList = this.showList;
        let _totalCount = 0;

        this.dataList.forEach(function(item, index, array){
          if(item.title.indexOf(_search_input) != -1){
            _showList.push(item);
            _totalCount++;
          }
        });
        this.totalCount = _totalCount;
      }
    }
  }
</script>
