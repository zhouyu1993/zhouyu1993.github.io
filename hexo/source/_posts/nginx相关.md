---
title: nginx

categories:
  - web

tags:
  - software

date: 2019/06/03
---

不同系统中nginx的安装与使用。

包括：MacOS、linux、windows 等。

<!-- more -->

# MacOS

## 安装 nginx

``` bash
# First update the formulae and Homebrew itself:
brew update

# You can now find out what is outdated with:
brew outdated

# Upgrade everything with:
brew upgrage

# Check nginx information to see if it is installed:
brew search nginx

# Install nginx
brew install nginx
```

安装完成后，

nginx 目录在 `/usr/local/Cellar/nginx`

nginx 的主页文件在 `/usr/local/var/www`

nginx 的日志文件在 `/usr/local/var/log/nginx`

nginx 的配置文件在 `/usr/local/etc/nginx/nginx.conf`

## 使用 nginx

``` bash
# 查看使用 brew 安装的服务列表（包括服务状态）
brew services list

# 清除已卸载应用的无用的配置
brew services cleanup

# 查看 80 端口
lsof -i:80

# 启动 nginx 服务，并注册
brew services start nginx

# 停止 nginx 服务，并取消注册
brew services stop nginx

# 重启 nginx 服务，并注册
brew services restart nginx
```

注意，这里不要使用 `nginx` 命令来启动 nginx 服务，这样不方便停止。

nginx 配置等详细见下面 `2.4. 使用nginx`。

# linux

## linux 常用命令

* ls: 列出目录
* cd: 切换目录
* pwd: 显示目前的目录
* mkdir: 创建一个新的目录
* cp: 复制文件或目录
* rm: 移除文件或目录
* mv: 移动文件与目录，或修改文件与目录的名称

* cat: 由第一行开始显示文件内容
* nl: 显示的时候，顺道输出行号！
* more: 一页一页的显示文件内容
* less: 与 more 类似，但是比 more 更好的是，他可以往前翻页！
* head: 只看头几行
* tail: 只看尾巴几行

* touch: 创建空白文档
* vi: 创建一个编辑状态的空文档，只有保存退出后才创建成功，文件属性与 touch 创建的相同
* vim: vi 的升级版本

[linux 命令大全](https://www.runoob.com/linux/linux-command-manual.html)

## 在终端利用 ssh 登录远程服务器

``` bash
# 登录
ssh -p [服务器port] [userName]@[服务器ip]

# 输入密码
```

## 安装 nginx

[linux packages](https://nginx.org/en/linux_packages.html)

需要根据 `linux` 的版本选择对应的包

``` bash
# 打印当前系统相关信息（操作系统名称、在网络上的主机名称、操作系统的发行编号、操作系统的版本、处理器类型、硬件平台、电脑类型、操作系统名称等）
uname -a

# 查看操作系统的标识文件
cat /etc/*-release
```

发现是 CentOS 7

``` bash
# 查看机器的 ip
ifconfig

# 查看机器是否能访问外网
curl -l https://www.baidu.com

wget https://www.baidu.com

ping baidu.com
```

### 如果机器能访问外网：

`Install the prerequisites:`

``` bash
yum update && yum install yum-utils
```

To set up the yum repository, create the file named `/etc/yum.repos.d/nginx.repo` with the following contents:

> [nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key

> [nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key

By default, the repository for stable nginx packages is used. If you would like to use mainline nginx packages, run the following command:

``` bash
yum-config-manager --enable nginx-mainline
```

To install nginx, run the following command:

``` bash
yum install nginx
```

### 如果机器不能访问外网：

本地安装 `PCRE` 和 `Nginx` ：

`PCRE` 作用是让 `Nginx` 支持 `Rewrite` 功能。

1. 下载 `PCRE` 安装包，下载地址：https://sourceforge.net/projects/pcre/files/pcre/

选择最新的 `zip` 包，例如：http://downloads.sourceforge.net/project/pcre/pcre/8.43/pcre-8.43.tar.gz

``` bash
wget http://downloads.sourceforge.net/project/pcre/pcre/8.43/pcre-8.43.tar.gz
```

2. 下载 `Nginx` 安装包，下载地址：http://nginx.org/en/download.html

选择最新的 `zip` 包，例如：http://nginx.org/download/nginx-1.17.0.tar.gz

``` bash
wget http://nginx.org/download/nginx-1.17.0.tar.gz
```

3. 使用 `ssh` 上传 `PCRE` 和 `Nginx` 的安装包

如果已知服务器密码，在本地：

``` bash
scp -r [本地文件路径] [userName]@[服务器ip]/[服务器文件路径]

# 输入密码
```

如果未知服务器密码，在服务器：

``` bash
scp -r [userName]@[本地ip]/[本地文件路径] [服务器文件路径]

# 输入密码
```

当然，未知服务器密码时，需要本地开启 `ssh`。下面给出 `MacOS` 开启 `ssh` 服务的方法：

``` bash
sudo systemsetup -getremotelogin # 查看 ssh 服务状态

sudo systemsetup -setremotelogin on # 开启 ssh 服务

sudo systemsetup -setremotelogin off # 关闭 ssh 服务
```

或者 `系统偏好设置 -> 共享 -> 远程登录`

4. 解压 `pcre` 安装包并编译安装

``` bash
# 进入刚刚上传安装包的文件目录，自定义。这里选择 /usr/local/src
cd /usr/local/src

# 解压 pcre
tar -zxvf pcre-8.43.tar.gz

# 编译安装 pcre
cd pcre-8.43

./configure

make && make install

# 查看 pcre 版本
pcre-config --version
```

4. 解压 `nginx` 安装包并编译安装

``` bash
# 进入刚刚上传安装包的文件目录，自定义。这里选择 /usr/local/src
cd /usr/local/src

# 解压 nginx
tar -zxvf nginx-1.17.0.tar.gz

# 查看是否存在 openssl
which openssl

# 编译安装 nginx
cd nginx-1.17.0

./configure --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.43

make && make install

# 查看 nginx 版本
/usr/local/nginx/sbin/nginx -v
```

`nginx` 编译选项：

* --prefix=path 定义一个目录，存放服务器上的文件，也就是 nginx 的安装目录。默认为 `/usr/local/nginx`。
* --sbin-path=path 设置 nginx 的可执行文件的路径，默认为 `*prefix*/sbin/nginx`。
* --conf-path=path 设置 nginx.conf 文件的路径。默认为 `*prefix*/conf/nginx.conf`。
* --pid-path=path 设置 nginx.pid 文件的路径。安装完成后，可以随时改变的文件名，在 nginx.conf 配置文件中使用 PID 指令。默认为 `*prefix*/logs/nginx.pid`。
* --error-log-path=path 设置主错误、警告和诊断文件的路径。安装完成后，可以随时改变的文件名，在 nginx.conf 配置文件中使用 error_log 指令。默认为 `*prefix*/logs/error.log`。
* --http-log-path=path 设置主请求的 HTTP 服务器的日志文件的路径。安装完成后，可以随时改变的文件名，在nginx.conf 配置文件中使用 access_log 指令。默认为 `*prefix*/logs/access.log`。
* --with-http_stub_status_module 开启 `stub_status` 模块监控，查看 `Nginx` 的一些状态信息。
* --with-http_ssl_module 使用 `https` 协议模块。默认情况下，该模块没有被构建。建立并运行此模块的 `openssl` 库是必需的。
* --with-pcre=path 设置 `PCRE` 库的源码路径。让 `Nginx` 支持 `Rewrite` 功能。

5. 将 `nginx` 命令添加到 `PATH` 中

``` bash
# 修改 /etc/profile
vi /etc/profile

# 找到 export 行，在下面新增加一行，内容为：
export PATH=$PATH:/usr/local/webserver/nginx/sbin

# 保持并退出：
:wq

# 立即生效
source /etc/profile

# 查看 nginx 版本
nginx -v
```

## 使用 `nginx`

``` bash
nginx -h/--help

# 启动 nginx
nginx
```

修改 `/usr/local/nginx/conf/nginx.conf`：

``` bash
vi /usr/local/nginx/conf/nginx.conf
```

在 `http` 块下加 `include conf.d/*.conf;`：

``` bash
http {
  include       mime.types;
  default_type  application/octet-stream;

  # 新增
  include       conf.d/*.conf;

  # ...
}
```

新建 `/usr/local/nginx/conf/conf.d` 文件夹，新建 `dev.zhouyu.com.conf`：

``` bash
cd /usr/local/nginx/conf && mkdir conf.d

cd conf.d && vi dev.zhouyu.com.conf
```

``` bash
server {
  listen 80;
  server_name dev.zhouyu.com;
  ssi on;

  error_log /home/work/log/nginx/dev.zhouyu.com-error.log; # 修改为实际目录
  access_log /home/work/log/nginx/dev.zhouyu.com-access.log; # 修改为实际目录
  log_not_found on;

  set $root_dir /home/work/html/dev.zhouyu.com; # 修改为实际目录
  set $root_dir_zh $root_dir/zh_CN/;
  set $root_dir_en $root_dir/en/;

  root $root_dir;

  location / {
    rewrite ^(.*)$ http://dev.zhouyu.com/zh_CN/$1 permanent;
  }

  location ^~ /zh_CN {
    alias $root_dir_zh;
    try_files $uri $uri/ /zh_CN/index.html;
  }

  location ^~ /en {
    alias $root_dir_en;
    try_files $uri $uri/ /en/index.html;
  }

  location /baidu {
    proxy_pass https://www.baidu.com/;
    proxy_set_header Host www.baidu.com; # 如果使用 $host 或 $http_host 会报 403
  }

  error_page 404 /404.html;
  error_page 500 /500.html;
  error_page 502 /502.html;
  error_page 503 /503.html;
  error_page 504 /504.html;

  # 自定义 404
  location = /404.html {
    root $root_dir/404.html;
  }
}
```

重新加载 `nginx` 配置文件

``` bash
# 检查
nginx -t

# 重载
nginx -s reload
```

测试，配置：`127.0.0.1 dev.zhouyu.com`，浏览器访问：`http://dev.zhouyu.com/baidu`，看是否打开百度首页。

停止 `nginx`

``` bash
nginx -s quit/stop

# 查看 80 端口
lsof -i:80

# 查询 nginx 主进程号
ps -ef | grep nginx

# 强制停止 nginx
kill -9 [主进程号]
```

# nginx 常用命令

nginx -h

nginx -v

nginx -V

nginx -t

nginx -s stop/quit/reopen/reload

# nginx 配置相关知识

## location 匹配

### 语法规则

``` bash
location [ = | ^~ | ~ | ~* | !~ | !~* | / ] uri {
  // ...
}

location @name {
  // ...
}
```

语法规则很简单，一个 location 关键字，后面跟着可选的修饰符，后面是要匹配的字符，花括号中是要执行的操作。

### 修饰符

``` bash
=   # 进行普通字符精确匹配。只有请求的 url 路径与后面的字符串完全相等时，才会命中

^~  # 表示普通字符匹配，如果该选项匹配，只匹配该选项，不再匹配别的选项，一般用来匹配目录

~   # 表示执行一个正则匹配，区分大小写

~*  # 表示执行一个正则匹配，不区分大小写

!~  # 表示执行一个正则不匹配，区分大小写

!~*  # 表示执行一个正则不匹配，不区分大小写

/    # 通用匹配, 如果没有其它匹配，任何请求都会匹配到

@    # 定义一个命名的 location，使用在内部定向时，例如 error_page, try_files
```

顺序 no优先级：

(location =) > (location 完整路径) > (location ^~ 路径) > (location ~、~* 正则顺序) > (location 部分起始路径) > (/)

建议使用：`=、^~、~*、/`

### 匹配过程

* 对请求的 url 序列化。例如，对 %xx 等字符进行解码，去除 url 中多个相连的 /，解析 url 中的 .，.. 等。这一步是匹配的前置工作。
* location 有两种表示形式，一种是使用前缀字符，一种是使用正则。如果是正则的话，前面有 ~ 或 ~* 修饰符。
* 具体的匹配过程如下：
  - 首先先检查使用前缀字符定义的 location，选择最长匹配的项并记录下来。
  - 如果找到了精确匹配的 location，也就是使用了 = 修饰符的 location，结束查找，使用它的配置。
  - 然后按顺序查找使用正则定义的 location，如果匹配则停止查找，使用它定义的配置。
  - 如果没有匹配的正则 location，则使用前面记录的最长匹配前缀字符 location。

基于以上的匹配过程，我们可以得到以下两点启示：

  1. 使用正则定义的 location 在配置文件中出现的顺序很重要。因为找到第一个匹配的正则后，查找就停止了，后面定义的正则就是再匹配也没有机会了。
  2. 使用精确匹配可以提高查找的速度。例如经常请求 / 的话，可以使用 = 来定义 location。

### 示例

``` bash
location = / {
  # 精确匹配 / ，主机名后面不能带任何字符串
  [ configuration A ]
}

location / {
  # 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求
  # 但是正则和最长字符串会优先匹配
  [ configuration B ]
}

location /documents/ {
  # 匹配任何以 /documents/ 开头的地址，匹配符合以后，记住还要继续往下搜索
  # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
  [ configuration C ]
}

location ~ /documents/Abc {
  # 匹配任何以 /documents/Abc 开头的地址，匹配符合以后，还要继续往下搜索
  # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
  [ configuration CC ]
}

location ^~ /images/ {
  # 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。
  [ configuration D ]
}

location ~* \.(gif|jpg|jpeg)$ {
  # 匹配所有以 .gif, .jpg 或 .jpeg 结尾的请求
  # 然而，所有请求 /images/ 下的图片会被 config D 处理，因为 ^~ 到达不了这一条正则
  [ configuration E ]
}

location /images/ {
  # 字符匹配到 /images/，继续往下，会发现 ^~ 存在
  [ configuration F ]
}

location /images/abc {
  # 最长字符匹配到 /images/abc，继续往下，会发现 ^~ 存在
  # F 与 G 的放置顺序是没有关系的
  [ configuration G ]
}

location ~ /images/abc/ {
  # 只有去掉 config D 才有效：先最长匹配 config G 开头的地址，继续往下搜索，匹配到这一条正则，采用
  [ configuration H ]
}

location ~* /js/.*/\.js {

}
```

* / -> config A
  精确完全匹配，匹配到A，即使 /index.html 也匹配不了
* /downloads/download.html -> config B
  完整路径，匹配到B，往下继续搜索发现没有任何匹配，最后采用B
* /images/1.gif -> configuration D
  完整路径，匹配到F，往下匹配到D，停止往下，采用D
* /images/abc/def -> config D
  完整路径，最长匹配到G，往下匹配到D，停止往下，采用D
  你可以看到 任何以 /images/ 开头的都会匹配到D并停止，FG写在这里是没有任何意义的，H是永远轮不到的，这里只是为了说明匹配顺序
* /documents/document.html -> config C
  完整路径，匹配到C，往下继续搜索发现没有任何匹配，最后采用C
* /documents/1.jpg -> configuration E
  完整路径，匹配到C，往下正则匹配到E
* /documents/Abc.jpg -> config CC
  完整路径，最长匹配到C，往下正则顺序匹配到CC，不会往下到E（正则匹配时，顺序很重要，一旦匹配就停止了）

### 实际使用建议

实际使用中，个人觉得至少有三个匹配规则定义，如下：

``` bash
# 直接匹配网站根，通过域名访问网站首页比较频繁，使用这个会加速处理，官网如是说。
# 这里是直接转发给后端应用服务器了，也可以是一个静态首页
# 第一个必选规则
location = / {
  proxy_pass http://tomcat:8080/index
}

# 第二个必选规则是处理静态文件请求，这是 nginx 作为 http 服务器的强项
# 有两种配置模式，目录匹配或后缀匹配,任选其一或搭配使用
location ^~ /static/ {
  root /webroot/static/;
}

location ~* \.(gif|jpg|jpeg|png|css|js|ico)$ {
  root /webroot/res/;
}

# 第三个规则就是通用规则，用来转发动态请求到后端应用服务器
# 非静态文件请求就默认是动态请求，自己根据实际把握
# 毕竟目前的一些框架的流行，带 .php, .jsp 后缀的情况很少了
location / {
  proxy_pass http://tomcat:8080/
}
```

### location `@name` 的用法

@用来定义一个命名 location。主要用于内部重定向，不能用来处理正常的请求。其用法如下：

``` bash
location / {
  try_files $uri $uri/ @custom
}
location @custom {
  # ...do something
}
```

上例中，当尝试访问 url 找不到对应的文件就重定向到我们自定义的命名 location（此处为custom）。

值得注意的是，命名 location 中不能再嵌套其它的命名 location。

### URL 尾部的 / 需不需要

推荐带

根据约定，URL 尾部的 / 表示目录，没有 / 表示文件。

访问 /some-dir/ 时，服务器会自动去该目录下找对应的默认文件。

访问 /some-dir 时，服务器会先去找 some-dir 文件，找不到的话会将 some-dir 当成目录，重定向到 /some-dir/，去该目录下找默认文件。

## set

定义在 server, location, if 模块中

设置指定变量的值。变量的值可以包含文本，变量或者是它们的组合形式。

``` bash
location / {
    set $var1 "host is ";
    set $var2 $host;
    set $var3 " uri is $request_uri";
    return 200 "response ok $var1$var2$var3";
}
# 发送如下请求
# curl 127.0.0.1:8080/test
# response ok host is 127.0.0.1 uri is /test
```

## root 与 alias

推荐 alias

都可以定义在 location 模块中，都是用来指定请求资源的真实路径。

root，是把location那部分也给拼接起来了。

alias，正如其名，代理！是将 `/i/` 代理为 `/data/w3`。

1. alias 只能作用在 location 中，而 root 可以存在 server、http 和 location 中。
2. alias 后面必须要用 “/” 结束，否则会找不到文件，而 root 则对 ”/” 可有可无。

``` bash
location /i/ {
  root /data/w3;
}
```

http://localhost/i/ -> /data/w3

**http://localhost/i/test.html -> /data/w3/i/test.html**

**http://localhost/i/j/test.html -> /data/w3/i/j/test.html**

``` bash
location /i/ {
  alias /data/w3/;
}
```

http://localhost/i/ -> /data/w3

**http://localhost/i/test.html -> /data/w3/test.html**

**http://localhost/i/j/test.html -> /data/w3/j/test.html**

## try_files

``` bash
upstream mongrel {
  server 127.0.0.1:4000;
}

location / {
  try_files $uri $uri/ $uri.html =404;
}

location / {
  try_files $uri $uri/ /index.html @mongrel;
}

location @mongrel {
  proxy_pass http://mongrel;
  proxy_set_header Host $http_host;
}
```

当用户请求 http://localhost/example 时，这里的 $uri 就是 `/example`。

try_files 会到服务器里尝试找这个文件。如果存在名为 `/$root/example`（其中 $root 是项目代码安装目录）的文件，就直接把这个文件的内容发送给用户。

显然，目录中没有叫 example 的文件。然后就看 $uri/，增加了一个 /，也就是看有没有名为 `/$root/example/` 的目录，如果有则去该目录下找默认文件 `/$root/example/index.html`。

又找不到，就会看 /index.html，发起一个内部 “子请求”，重定向到 http://localhost/index.html。

又找不到，就会看 @mongrel，发起一个内部 “子请求”，重定向到 `@mongrel` 模块。

## index

指令拥有默认值，`index index.html`，即，如果没有给出 `index`，默认初始页为 `index.html`。

``` bash
location / {
  root  /data/www;
  try_files $uri $uri/ $uri.html =404;
  index index.html index.htm;
}
```

## rewrite

rewrite 功能就是，使用 nginx 提供的全局变量或自己设置的变量，结合正则表达式和标志位实现 url 重写以及重定向。

### 规则

rewrite 只能放在 server {}, location {}, if {} 中，并且只能对域名后边的除去传递的参数外的字符串起作用。例如 http://seanlook.com/a/we/index.php?id=1&u=str 只对 `/a/we/index.php` 重写。

语法：`rewrite regex replacement [flag];`

如果相对域名或参数字符串起作用，可以使用全局变量匹配，也可以使用 proxy_pass 反向代理。

表面看 rewrite 和 location 功能有点像，都能实现跳转，主要区别在于 rewrite 是在同一域名内更改获取资源的路径，而 location 是对一类路径做控制访问或反向代理，可以 proxy_pass 到其他机器。很多情况下 rewrite 也会写在 location 里，它们的执行顺序是：

1. 执行 server 块的 rewrite 指令
2. 执行 location 匹配
3. 执行选定的 location 中的 rewrite 指令

如果其中某步 uri 被重写，则重新循环执行 1-3，直到找到真实存在的文件；循环超过 10 次，则返回 500 Internal Server Error 错误。

* `rewrite` 指令是使用指定的正则表达式 `regex` 来匹配请求的 `uri`，如果匹配成功，则使用 `replacement` 更改 `uri`。
* `rewrite` 指令按照它们在配置文件中出现的顺序执行。可以使用 `flag` 标志来终止指令的进一步处理。如果替换字符串
* `replacement` 以 `http://`，`https://` 或 `$ scheme` 开头，则停止处理后续内容，并直接重定向返回给客户端。

第一种情况 重写的字符串带 `http://`

``` bash
location / {
  # 当匹配正则表达式 /test1/(.*)时 请求将被临时重定向到 http://www.$1.com
  # 相当于 flag 写为 redirect
  rewrite /test1/(.*) http://www.$1.com;
  return 200 "ok";
}
# 在浏览器中输入 127.0.0.1:8080/test1/baidu
# 则临时重定向到 http://www.baidu.com
# 后面的 return 指令将没有机会执行了
```

第二种情况 重写的字符串不带 `http://`

``` bash
location / {
  rewrite /test1/(.*) www.$1.com;
  return 200 "ok";
}
# 在终端中输入 curl 127.0.0.1:8080/test1/baidu
# ok

# 此处没有带 http:// 所以只是简单的重写。请求的 uri 由 /test1/baidu 重写为 www.baidu.com
# 因为会顺序执行 rewrite 指令，所以下一步执行 return 指令，响应了 ok
```

### flag 标志位

* last: 相当于 Apache 的 [L] 标记，表示完成 rewrite。
* break: 停止执行当前虚拟主机的后续 rewrite 指令集。
* redirect: 返回 302 临时重定向，地址栏会显示跳转后的地址
* permanent: 返回 301 永久重定向，地址栏会显示跳转后的地址

因为 301 和 302 不能简单的只返回状态码，还必须有重定向的 URL，这就是 return 指令无法返回 301、302 的原因了。这里 last 和 break 区别有点难以理解：

#### last 与 break

1. last 一般写在 server 和 if 中，而 break 一般使用在 location 中
2. last 不终止重写后的 url 匹配，即新的 url 会再从 server 走一遍匹配流程，而 break 终止重写后的匹配
3. last 和 break 都能阻止继续执行后面的 rewrite 指令

例子：

``` bash
rewrite xxx1 yyy last; ⑦
rewrite xxx2 yyy last; ⑧
rewrite xxx3 yyy last; ⑨
rewrite xxx4 yyy last; ⑩

location ~  url1 {
  rewrite url1 url2 last; ①
}

location ~  url3 {
  rewrite url3 url4 break; ②

  # 这条指令会被忽略
  rewrite url3 url5;

  # 因为 fastcgi_pass 不是 rewrite 模块的指令，所以它不会被 break终止
  fastcgi_pass 127.0.0.1:9000;
}

location ~  url5 {
  rewrite url5 url6 break;  ②

  # 这条指令会被忽略
  rewrite url5 url7;

  # 因为 proxy_pass 不是 rewrite 模块的指令，所以它不会被 break终止
  proxy_pass https://www.baidu.com;
}
```

第一个 location 中的 rewrite 指令处理完成之后，会跳出 location，再重新判断 rewrite 7 ~ 9 的规则。

第二个 location 中的 rewrite 指令处理完成之后，不会跳出 location，更不会重新判断 rewrite 7 ~ 9 的规则。而只能将信息传递给后面的 fastcgi_pass 或者 proxy_pass 等指令。

last: 使用了 last 指令，rewrite 后会跳出 location 作用域，重新开始再走一次刚刚的行为。

break: 使用了 break 指令，rewrite 后不会跳出 location 作用域。它的生命也在这个 location 中终结。

last 和 break 相对于访问日志的请求状态码是 200。

#### permanent 和 redirect

permanent 301 永久重定向

redirect 302 临时重定向

SEO

在利用百度的搜索引擎的时候，301 的 SEO 是对应重定向后的内容和 url，302 的 SEO 是对应重定向后的内容和重定向前的 url；
在利用 Google 的搜索引擎的时候，Google会将 302 按照 301 处理，所以 SEO 都是重定向后的内容和 url；

尽量要使用 301 跳转，防止网址劫持。

尽量使用 permanent。

浏览器会缓存 301 的请求，不会缓存 302 的。

如果是个人网站，或网站用途只是开发测试，改动的可能性比较大，建议使用 302。

如果是生产环境，或改动的可能性比较小，建议使用 301。

### rewrite 后的请求参数

如果替换字符串 replacement 包含新的请求参数，则在它们之后附加先前的请求参数。如果你不想要之前的参数，则在替换字符串 replacement 的末尾放置一个问号，避免附加它们。

``` bash
# 由于最后加了个 ?，原来的请求参数将不会被追加到 rewrite 之后的 url 后面
rewrite ^/users/(.*)$ /show?user=$1? last;
```

### if 指令

if 可放在 server {}, location {} 中，语法为 `if (condition) { ... }`。

对给定的条件 condition 进行判断。如果为真，大括号内的 rewrite 指令将被执行，if 条件 (conditon) 可以是如下任何内容：

* 当表达式只是一个变量时，如果值为空或任何以 0 开头的字符串都会当做 false
* 直接比较变量和内容时，使用 = 或 !=。注意此处不要把相等当做赋值语句啊
* `~`  区分大小写的正则匹配，`~*` 不区分大小写的正则匹配，`!~`、`!~*` 前面两者的非

* 检测文件是否存在，使用 -f(存在) 和 !-f(不存在)
* 检测路径是否存在，使用 -d(存在) 和 !-d(不存在) 后面判断可以是字符串也可是变量
* 检测文件、路径、或者链接文件是否存在，使用 -e(存在) 和 !-e(不存在) 后面判断可以是字符串也可是变量
* 检测文件是否为可执行文件，使用 -x(可执行) 和 !-x(不可执行) 后面判断可以是字符串也可是变量

注意，上面第1、2、3条被判断的必须是变量，第4、5、6、7则可以是变量也可是字符

```
set $variable "0";

if ($variable) {
  # 不会执行，因为 "0" 为 false
  break;            
}

# 使用变量与正则表达式匹配 没有问题
if ($http_host ~ "^star\.igrow\.cn$") {
  break;            
}

# 字符串与正则表达式匹配 报错
if ("star" ~ "^star\.igrow\.cn$") {
  break;            
}

# 检查文件类的 字符串与变量均可
if (!-f "/data.log") {
    break;            
}

if (!-f $filename) {
  break;            
}
```

```
if ($http_user_agent ~ MSIE) {
  rewrite ^(.*)$ /msie/$1 break;
} //如果 UA 包含 "MSIE"，rewrite 请求到 /msid/ 目录下

if ($http_cookie ~* "id=([^;]+)(?:;|$)") {
  set $id $1;
} // 如果 cookie 匹配正则，设置变量 $id 等于正则引用部分

if ($request_method = POST) {
  return 405;
} // 如果提交方法为 POST，则返回状态 405（Method not allowed）。return 不能返回 301，302

if ($slow) {
  limit_rate 10k;
} // 限速，$slow 可以通过 set 指令设置

if (!-f $request_filename){
  break;
  proxy_pass http://127.0.0.1;
} // 如果请求的文件名不存在，则反向代理到 localhost。这里的 break 也是停止 rewrite 检查

if ($args ~ post=140){
  rewrite ^ http://example.com/ permanent;
} // 如果 query string 中包含 "post=140"，永久重定向到 example.com

location ~* \.(gif|jpg|png|swf|flv)$ {
  valid_referers none blocked www.jefflei.com www.leizhenfang.com;
  if ($invalid_referer) {
    return 404;
  } // 防盗链
}
```

### 全局变量

下面是可以用作 if 判断的全局变量：

* $args ： 这个变量等于请求行中的参数，同 $query_string
* $content_length ： 请求头中的 Content-length 字段。
* $content_type ： 请求头中的 Content-Type 字段。
* $document_root ： 当前请求在 root 指令中指定的值。
* $host ： 请求主机头字段，否则为服务器名称。
* $http_user_agent ： 客户端 agent 信息
* $http_cookie ： 客户端 cookie 信息
* $limit_rate ： 这个变量可以限制连接速率。
* $request_method ： 客户端请求的动作，通常为 GET 或 POST。
* $remote_addr ： 客户端的 IP 地址。
* $remote_port ： 客户端的端口。
* $remote_user ： 已经经过 Auth Basic Module 验证的用户名。
* $request_filename ： 当前请求的文件路径，由 root 或 alias 指令与 uri 请求生成。
* $scheme ： HTTP 方法（如 http，https）。
* $server_protocol ： 请求使用的协议，通常是 HTTP/1.0 或 HTTP/1.1。
* $server_addr ： 服务器地址，在完成一次系统调用后可以确定这个值。
* $server_name ： 服务器名称。
* $server_port ： 请求到达服务器的端口号。
* $request_uri ： 包含请求参数的原始 uri，不包含主机名，如：”/foo/bar.php?arg=baz”。
* $uri ： 不带请求参数的当前 uri，$uri 不包含主机名，如 ”/foo/bar.html”。
* $document_uri ： 与 $uri 相同。

### return

return 可放在 server {}, location {}, if (conditon) {} 中

``` bash
return code [text];
return code URL;
return URL;
```

该指令将结束执行直接返回 http 状态码到客户端.

支持的 http 状态码：200, 204, 400, 402-406, 408, 410, 411, 413, 416, 500-504，还有非标准的 444 状态码。

从 `0.8.42` 版本开始，`return` 语句可以指定重定向 `url` (状态码可以为如下几种 301,302,303,307)，也可以为其他状态码指定响应的文本内容，并且重定向的 `url` 和响应的文本可以包含变量。

有一种特殊情况，就是重定向的 `url` 可以指定为此服务器本地的 `uri` ，这样的话，`nginx` 会依据请求的协议 `$scheme`， `server_name_in_redirect` 和 `port_in_redirect` 自动生成完整的 `url` （此处要说明的是 `server_name_in_redirect` 和 `port_in_redirect` 指令是表示是否将 `server` 块中的 `server_name` 和 `listen` 的端口作为 `redirect` 用）

``` bash
# return code [text]; 返回 ok 给客户端
location = /ok {
  return 200 "ok";
}

# return code URL; 临时重定向到 百度
location = /redirect {
  return 302 http://www.baidu.com;
}

# return URL; 和上面一样 默认也是临时重定向
location = /redirect {
  return http://www.baidu.com;
}
```

## proxy_pass

反向代理。在 proxy_pass 后面的 url 加 /，表示绝对根路径；如果没有 /，表示相对路径，把匹配的路径部分也给代理走。

最好 location 后面的 url 加 /，proxy_pass 后面的 url 也加 /。当然也视具体情况！

``` bash
location /proxy {
  proxy_pass https://www.baidu.com/;
}
```

/proxy -> https://www.baidu.com/

/proxys?wd=nginx -> https://www.baidu.com/s?wd=nginx

``` bash
location /proxy {
  proxy_pass https://www.baidu.com;
}
```

/proxy -> https://www.baidu.com/proxy -> 404 -> /search/error.html -> 502

``` bash
location /proxy/ {
  proxy_pass https://www.baidu.com/;
}
```

/proxy -> 301 -> /proxy/ -> https://www.baidu.com/

/proxy/s?wd=nginx -> https://www.baidu.com/s?wd=nginx

``` bash
location /proxy/ {
  proxy_pass https://www.baidu.com;
}
```

/proxy -> 301 -> /proxy/ -> https://www.baidu.com/proxy/ -> 404 -> /search/error.html -> 502

### 正向代理与反向代理

例子！！！

## $proxy_host、$host 与 $http_host

默认是 `proxy_set_header Host $proxy_host;`

``` bash
upstream my-localhost {  
  server 127.0.0.1:8080;  
}

upstream my-baidu {  
  server www.baidu.com;  
}

server {  
  listen       80;  
  server_name  chuan.aty.sohuno.com;  
  proxy_set_header Host $http_host;  

  location /myLocalhost {  
    proxy_pass http://my-localhost;
  }  

  location /baidu {  
    proxy_pass http://my-baidu;  
    proxy_set_header Host $proxy_host;  
  }

  location /baidu2 {  
    proxy_pass http://my-baidu;  
    proxy_set_header Host www.baidu.com;  
  }

  location /baidu3 {  
    proxy_pass http://my-baidu;  
    proxy_set_header Host $http_host;
  }

  location /baidu4 {  
    proxy_pass http://my-baidu;  
    proxy_set_header Host $host;
  }

  location /baidu5 {  
    proxy_pass http://my-baidu;  
    proxy_set_header Host $host:$proxy_port;
  }
}
```

当匹配到 /baidu 时，使用 baidu 处理，到 upstream 就匹配到 wwww.baidu.com，这里接转换成 IP 进行转发了。假如 www.baidu.com 是在另一台 nginx 下配置的，ip 为 10.22.10.116，则 $proxy_host 则对应为 10.22.10.116。此时相当于设置了 Host 为 10.22.10.116。如果想让 Host 是 www.baidu.com，则进行如下设置：

``` bash
proxy_set_header Host www.baidu.com;
```

如果不想改变请求头 Host 的值，可以这样来设置：

``` bash
proxy_set_header Host $http_host;
```

但是，如果客户端请求头中没有携带这个头部，那么传递到后端服务器的请求也不含这个头部。这种情况下，更好的方式是使用 `$host` 变量——它的值在请求包含 Host 请求头时为 Host 字段的值，在请求未携带 Host 请求头时为虚拟主机的主域名：

``` bash
proxy_set_header Host $host;
```

此外，服务器名可以和后端服务器的端口一起传送：

``` bash
proxy_set_header Host $host:$proxy_port;
```

如果某个请求头的值为空，那么这个请求头将不会传送给后端服务器：

``` bash
proxy_set_header Accept-Encoding "";
```

## $document_uri、$uri 与 $request_uri

$document_uri 与 $uri 一样

$uri 指的是请求的文件和路径，不包含 ”?” 或者 ”#” 之类的东西

$request_uri 则指的是请求的整个字符串，包含了后面请求的东西（”?”、”#”等）

例如，请求地址：https://www.baidu.com/s?wd=nginx

$uri：`/s`

$request_uri：`/s?wd=nginx`

## upstream

nginx 负载均衡
