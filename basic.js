// npm是随同nodeJS一起安装的包管理工具

// 查看npm版本 也可以测试npm是否安装成功
$ npm -v

// 升级npm到最新版本
$ sudo npm install npm@latest -g

// 通常一个应用会依赖几十个甚至上百个package 并且这些package通常并不是很大
// 在实际应用中 基本的思想就是建立一个精小的代码块(package)专门用来解决某个问题 然后再通过这些小的代码块组合起来来解决一个更大的问题

// 复用其他开发者编写的代码时 可以通过npm下载安装对应的package(包) 也可以叫做module(模块)
// 安装一个包  执行该命令后 会在当前目录下创建一个名为 node_module 的目录(如果不存在的话就创建这个目录) 然后将下载的package保存到 node_module 目录下
$ npm install <package_name>

// 如果自己的某个模块依赖于某个包 那么应该选择本地安装 这也是 npm install 命令的默认行为
	// 比如 当通过Node.js的require加载express时 就应该在我们的这个模块所在项目的本地安装express

// 如果当前目录下不存在 package.json 文件 那么该命令安装最新版本的package 否则按照 package.json 文件中所指定package的版本来安装

// package文件夹下的 package.json 文件是用来描述该package的信息的 
// 管理本地安装的package的最好方法就是创建并使用 package.json 文件 
// package.json被视作项目所依赖的package的参考文件 它必须包含name(包的名字) 和 version(包的版本)

// 创建package.json 通过 --yes 或是 -y 创建默认的package.json 避免了命令行下的询问 信息从当前目录获取
$ npm init -y

{
	"name": "npm",         // 当前目录名字
	"version": "1.0.0",    // 总是 1.0.0
	"description": "",     // 方便别人搜索到该package
	"main": "index.js",    // 入口文件 在一个模块中引入该项目时 所返回的文件为index.js
	"scripts": {
	 	"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC"
}

// 如果没有"description"字段 npm将使用README.md的第一行代替 如果README.md不存在 那么"description"字段为空字符串

// 在package.json中使用"dependencise"和"devDependencies"字段来指定项目所依赖的package

// "dependencise"指定了应用生产时必须的packages
$ npm install <package_name> --save  // 简写 npm i <package_name> -S

// "devDependencies" 指定了应用开发和测试时需要的packages
$ npm install <package_name> --save-dev  // 简写 npm i <package_name> -D

// 语义化版本(Semantic Versioning)规则 它被很多项目用来描述所发布的版本有哪种类型的改变 [major, minor, patch]

  // 如果一个项目将要发布并共享出来 它应该尽量从 1.0.0 版本开始
    // 修复 bug 或者其他较小的改变 补丁版本发布 应当增加最后一个数字 例如 1.0.1
    // 新增的特性不会改变当前已存在的特性 小版本发布 应当增加中间的数字 例如 1.1.0
    // 影响到向后兼容的改变 大版本发布 应当增加第一个数字 例如 2.0.0

    // 版本范围(version range) 指定了满足范围规定的package版本将被下载

/*
        >=1.2.7 (大于等于该版本)

            match
                  1.2.7
                  1.2.8
                  2.3.1

        >=1.2.7 <1.3.0 (大于等于1.2.7版本 小于1.3.0版本)

        1.2.7 || >=1.2.9 <2.0.0

            match

                  1.2.7
                  1.2.9
                  1.7.8

        高级范围语法

            1.2 - 2.3.4 相当于 >=1.2.0 <=2.3.4

            1.2.3 - 2.3 相当于 >=1.2.3 <2.4.0

            1.2.3 - 2 相当于 >=1.2.3 <3.0.0

            * 相当于 >=0.0.0 意味着任何版本都满足 也可以用空字符串("")

            1.x 相当于 >=1.0.0 <2.0.0

            1.2.x 相当于 >=1.2.0 <1.3.0

            1 相当于 1.x.x 相当于 >=1.0.0 <2.0.0

            1.2 相当于 1.2.x 相当于 >=1.2.0 <1.3.0

            ~1.2.3 相当于 >=1.2.3 <1.(2+1).0 相当于 >=1.2.3 <1.3.0

            ~1.2 相当于 >=1.2.0 <1.(2+1).0 相当于 >=1.2.0 <1.3.0 (Same as 1.2.x)

            ~1 相当于 >=1.0.0 <(1+1).0.0 相当于 >=1.0.0 <2.0.0 (Same as 1.x)

            ^1.2.3 相当于 >=1.2.3 <2.0.0

            ^0.2.3 相当于 >=0.2.3 <0.3.0

            ^1.2.x 相当于 >=1.2.0 <2.0.0
*/

// 如果在当前目录下有一个package.json文件 在当前目录下运行
$ npm install
// npm将查看package.json中列出的所有依赖 并下载这些依赖符合SemVer规则的最新版本到 node_modules 目录中

// 在 package.json 文件所在的目录中执行
$ npm outdated
// 查看有最新版本的包

$ npm update
// 更新我们所依赖的包到符合SemVer规则的最新版本

$ npm uninstall <package_name>
// 从node_module文件夹中删除package

$ npm login
// 登录npm 以发布自己的package

$ npm publish
// 发布package 如果报错 npm ERR! publish Failed PUT 403 那可能就是package.json文件中的name字段已被使用