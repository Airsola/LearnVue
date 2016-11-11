<template>

  <div class="row">
    <div class="col-md-12 col-sm-12">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>当前路径：{{ path }}</th>
            <th class="text-right">
              <button class="btn btn-danger btn-xs" @click="goBack()" v-if="path !== '/'">返&emsp;回</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="file in sortedFiles">
            <td>
              <div class="file" v-if="file.type === 'file'">
                <span class="octicon octicon-file-text"></span>
                <a href="#"> {{ file.name }}</a>
              </div>
              <div class="directory" v-if="file.type === 'dir'">
                <span class="octicon octicon-file-directory"></span>
                <a href="#" @click="changePath(file.path)"> {{ file.name }}</a>
              </div>
            </td>
            <td class="text-right">
              <a :href='file.download_url' download="file" v-if="file.type === 'file'">
                <span class="octicon octicon-cloud-download"></span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
  export default {

    name: 'FileExplorer',
    data: function(){
      return {
        path: '/',
        files: []
      };
    },
    
    props: {
      username: {
        type: String,
        required: true
      },
      repo: {
        type: String,
        required: true
      }
    },
   
 
     computed: {
      fullRepoUrl: function() {
        return this.username + '/' + this.repo;
      },

      sortedFiles: function() {
        return this.files.sort(function(a, b) {
          if (a.type !== b.type) {
            if (a.type === 'dir') {
              return -1;
            } else {
              return 1;
            }
          } else {
            if (a.name < b.name) {
              return -1;
            } else {
              return 1;
            }
          }
        });
      }
    },
    

    methods: {

      getFiles: function() {

        // this.$http.get('https://api.github.com/repos/' + this.fullRepoUrl + '/contents' + this.path,
        //   function(data) {
        //     this.files = data;
        //   }
        // );

		this.$http.get('https://api.github.com/repos/' + this.fullRepoUrl + '/contents' + this.path)
				  .then((response) => {
		    // success callback

		       this.files = response.data;
		
 		}, (response) => {
 		 console.log(response)

		    // error callback
		});



      },

      changePath: function(path) {
        this.path = '/' + path;
        this.getFiles();
      },

      //这个GoBank居然返回上一层级URL重新访问  这这...
      goBack: function() {
        this.path = this.path.split('/').slice(0, -1).join('/');
        if (this.path === '') this.path = '/';
        this.getFiles();
      }
    },
   
    //watch 这个部分不太熟悉
    watch: {
      repo: function(newVal, oldVal) {
        this.path = '/';
        this.getFiles();
      },

    },

   created: function() {
      if (this.username && this.repo) this.getFiles();
    } 
        

  };
</script>