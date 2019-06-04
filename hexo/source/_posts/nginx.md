---
title: nginx

categories:
  - web

tags:
  - software

date: 2019/06/03
---

不同系统中nginx的安装与使用

# mac

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

注意，这里不要使用 `nginx` 命令来启动 nginx 服务，这样不方便停止

# linux

服务器

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

需要根据 linux 的版本选择对应的包

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

`To set up the yum repository, create the file named /etc/yum.repos.d/nginx.repo with the following contents:`

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

`By default, the repository for stable nginx packages is used. If you would like to use mainline nginx packages, run the following command:`

``` bash
yum-config-manager --enable nginx-mainline
```

`To install nginx, run the following command:`

``` bash
yum install nginx
```

### 如果机器不能访问外网：

`本地安装 PCRE 和 Nginx ：`

`PCRE` 作用是让 `Nginx` 支持 `Rewrite` 功能。

1. 下载 PCRE 安装包，下载地址：https://sourceforge.net/projects/pcre/files/pcre/

选择最新的 zip 包，例如：http://downloads.sourceforge.net/project/pcre/pcre/8.43/pcre-8.43.tar.gz

``` bash
wget http://downloads.sourceforge.net/project/pcre/pcre/8.43/pcre-8.43.tar.gz
```

2. 下载 Nginx 安装包，下载地址：http://nginx.org/en/download.html

选择最新的 zip 包，例如：http://nginx.org/download/nginx-1.17.0.tar.gz

``` bash
wget http://nginx.org/download/nginx-1.17.0.tar.gz
```

3. 使用 ssh 上传 PCRE 和 Nginx 的安装包

如果已知服务器密码：

``` bash
scp -r [本地文件路径] [userName]@[服务器ip]/[服务器文件路径]

# 输入密码
```

如果未知服务器密码：

``` bash
scp -r [userName]@[本地ip]/[本地文件路径] [服务器文件路径]

# 输入密码
```

当然，未知服务器密码时，需要本地开启 ssh。下面给出 MacOS 开启 ssh 服务的方法：

``` bash
sudo systemsetup -getremotelogin # 查看 ssh 服务状态

sudo systemsetup -setremotelogin on # 开启 ssh 服务

sudo systemsetup -setremotelogin off # 关闭 ssh 服务
```

或者 `系统偏好设置 -> 共享 -> 远程登录`

4. 解压 pcre 安装包并编译安装

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

4. 解压 nginx 安装包并编译安装

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

nginx 编译选项：

* --prefix=path 定义一个目录，存放服务器上的文件，也就是 nginx 的安装目录。默认为 `/usr/local/nginx`。
* --sbin-path=path 设置 nginx 的可执行文件的路径，默认为 `*prefix*/sbin/nginx`。
* --conf-path=path 设置 nginx.conf 文件的路径。默认为 `*prefix*/conf/nginx.conf`。
* --pid-path=path 设置 nginx.pid 文件的路径。安装完成后，可以随时改变的文件名，在 nginx.conf 配置文件中使用 PID 指令。默认为 `*prefix*/logs/nginx.pid`。
* --error-log-path=path 设置主错误、警告和诊断文件的路径。安装完成后，可以随时改变的文件名，在 nginx.conf 配置文件中使用 error_log 指令。默认为 `*prefix*/logs/error.log`。
* --http-log-path=path 设置主请求的 HTTP 服务器的日志文件的路径。安装完成后，可以随时改变的文件名，在nginx.conf 配置文件中使用 access_log 指令。默认为 `*prefix*/logs/access.log`。
* --with-http_stub_status_module 开启 stub_status 模块监控，查看 Nginx 的一些状态信息。
* --with-http_ssl_module 使用 https 协议模块。默认情况下，该模块没有被构建。建立并运行此模块的 `openssl` 库是必需的。
* --with-pcre=path 设置 PCRE 库的源码路径。让 `Nginx` 支持 `Rewrite` 功能。

5. 将 nginx 命令添加到 PATH 中

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

## 使用 nginx

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

  include       conf.d/*.conf;

  # ...
}
```

新建 `/usr/local/nginx/conf/conf.d` 文件夹，新建 `xxx.com.conf`：

``` bash
cd /usr/local/nginx/conf && mkdir conf.d

cd conf.d && vi xxx.com.conf
```

``` bash
upstream mipush-op {
 server yyy.yyy.yyy.yyy:port;
}

server {
  listen 80;
  server_name xxx.com;
  ssi on;

  error_log /home/work/log/nginx/xxx.com-error.log;
  access_log /home/work/log/nginx/xxx.com-access.log;
  log_not_found on;

  set $root_dir /home/work/html/xxx.com;
  set $root_dir_zh /home/work/html/xxx.com/zh_CN/;
  set $root_dir_en /home/work/html/xxx.com/en/;

  root $root_dir;

  location / {
    rewrite ^(.*)$ http://xxx.com/zh_CN/ redirect;
  }

  location ^~ /zh_CN {
    alias $root_dir_zh;
    try_files $uri $uri/ /zh_CN/index.html;
  }

  location ^~ /en {
    alias $root_dir_en;
    try_files $uri $uri/ /en/index.html;
  }

  location ~ /(mipush/op/.*)$ {
    rewrite ^/mipush/(.*)$ /$1 break;
    proxy_pass http://mipush-op;
    proxy_set_header Host $http_host;
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

重新加载 nginx 配置文件

``` bash
# 检查
nginx -t

# 重载
nginx -s reload
```

停止 nginx

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

# location 匹配命令

~     # 表示执行一个正则匹配，区分大小写

~*    # 表示执行一个正则匹配，不区分大小写

^~    # 表示普通字符匹配，如果该选项匹配，只匹配该选项，不匹配别的选项，一般用来匹配目录

=     # 进行普通字符精确匹配

/     # 通用匹配, 如果没有其它匹配,任何请求都会匹配到

@     # 定义一个命名的 location，使用在内部定向时，例如 error_page, try_files


顺序优先级：

(location =) > (location 完整路径) > (location ^~ 路径) > (location ~、~* 正则顺序) > (location 部分起始路径) > (/)

建议使用：`=、^~、~*、/`

# root 与 alias

都可以定义在 location 模块中，都是用来指定请求资源的真实路径。

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

alias，正如其名，代理！是将 /i/ 代理为 /data/w3。

1. alias 只能作用在location中，而root可以存在server、http和location中。
2. alias 后面必须要用 “/” 结束，否则会找不到文件，而 root 则对 ”/” 可有可无。

# rewrite

## 规则

rewrite 只能放在 server {}, location {}, if {} 中，并且只能对域名后边的除去传递的参数外的字符串起作用。

如果相对域名或参数字符串起作用，可以使用全局变量匹配，也可以使用 proxy_pass 反向代理。

rewrite 和 location 功能有点像，都能实现跳转，主要区别在于 rewrite 是在同一域名内更改获取资源的路径，而 location 是对一类路径做控制访问或反向代理，可以 proxy_pass 到其他机器。很多情况下 rewrite 也会写在 location 里，它们的执行顺序是：

1. 执行 server 块的 rewrite 指令
2. 执行 location 匹配
3. 执行选定的 location 中的 rewrite 指令

如果其中某步 URI 被重写，则重新循环执行 1-3，直到找到真实存在的文件；循环超过 10 次，则返回 500 Internal Server Error 错误。

## flag 标志位

* last: 相当于 Apache 的 [L] 标记，表示完成 rewrite。
* break: 停止执行当前虚拟主机的后续 rewrite 指令集。
* redirect: 返回 302 临时重定向，地址栏会显示跳转后的地址
* permanent: 返回 301 永久重定向，地址栏会显示跳转后的地址

因为 301 和 302 不能简单的只返回状态码，还必须有重定向的 URL，这就是 return 指令无法返回 301、302 的原因了。这里 last 和 break 区别有点难以理解：

### last 与 break

1. last 一般写在 server 和 if 中，而 break 一般使用在 location 中
2. last 不终止重写后的 url 匹配，即新的 url 会再从 server 走一遍匹配流程，而 break 终止重写后的匹配
3. break 和 last 都能阻止继续执行后面的 rewrite 指令

例子：

``` bash
rewrite xxx1 yyy last; ⑦
rewrite xxx2 yyy last; ⑧
rewrite xxx3 yyy last; ⑨
rewrite xxx4 yyy last; ⑩

location ~  url1 {
  rewrite url1 url2 last; ①
}

location ~  url2 {
  rewrite url3 url4 break; ②
  fastcgi_pass 127.0.0.1:9000;
}
```

第一个 location 中的 rewrite 指令处理完成之后，会跳出 location，再重新判断 rewrite 7 ~ 9 的规则。

第二个 location 中的 rewrite 指令处理完成之后，不会跳出 location，更不会重新判断 rewrite 7 ~ 9 的规则。而只能将

信息传递给后面的 fastcgi_pass 或者 proxy_pass 等指令。

last: 使用了 last 指令，rewrite 后会跳出 location 作用域，重新开始再走一次刚刚的行为。

break: 使用了 break 指令，rewrite 后不会跳出 location 作用域。它的生命也在这个 location 中终结。

last 和 break 相对于访问日志的请求状态码是 200

### permanent 和 redirect

permanent 301 永久重定向

redirect 302 临时重定向

SEO

在利用百度的搜索引擎的时候，301 的 SEO 是对应重定向后的内容和 url，302 的 SEO 是对应重定向后的内容和重定向前的 url；
在利用 Google 的搜索引擎的时候，Google会将 302 按照 301 处理，所以 SEO 都是重定向后的内容和 url；

尽量要使用 301 跳转，防止网址劫持。

尽量使用 permanent。

---

浏览器会缓存 301 的请求，不会缓存 302 的。

如果是个人网站，或网站用途只是开发测试，改动的可能性比较大，建议使用 302。

如果是生产环境，或改动的可能性比较小，建议使用 301。


例子！！！



# proxy_pass

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

## 正向代理与反向代理

例子！！！

# $host 与 $http_host

例子！！！

# $uri 与 $request_uri

$uri 指的是请求的文件和路径，不包含 ”?” 或者 ”#” 之类的东西

$request_uri 则指的是请求的整个字符串，包含了后面请求的东西（”?”、”#”等）

例如，请求地址：https://www.baidu.com/s?wd=nginx

$uri：`/s`

$request_uri：`/s?wd=nginx`

# try_files

``` bash
upstream mongrel {
  server 127.0.0.1:4000;
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

try_files 会到服务器里尝试找这个文件。如果存在名为 /$root/example（其中 $root 是项目代码安装目录）的文件，就直接把这个文件的内容发送给用户。

显然，目录中没有叫 example 的文件。然后就看 $uri/，增加了一个 /，也就是看有没有名为 /$root/example/ 的目录。

又找不到，就会看 /index.html，发起一个内部 “子请求”，重定向到 http://localhost/index.html。

又找不到，就会看 @mongrel，发起一个内部 “子请求”，重定向到 @mongrel 模块。

# upstream
