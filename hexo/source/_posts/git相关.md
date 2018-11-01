---
title: git相关

categories:
  - web

tags:
  - 管理工具
---

# git

[git](https://git-scm.com/)

[doc](https://git-scm.com/book/zh/v2/)

# 版本控制

版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。

如果你是位图形或网页设计师，可能会需要保存某一幅图片或页面布局文件的所有修订版本（这或许是你非常渴望拥有的功能），采用版本控制系统（VCS）是个明智的选择。

有了它你就可以将某个文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。

使用版本控制系统通常还意味着，就算你乱来一气把整个项目中的文件改的改删的删，你也照样可以轻松恢复到原先的样子。但额外增加的工作量却微乎其微。

## 本地版本控制系统 LVC

复制整个项目，以改名加时间为备份。流行的有 RCS。

## 集中化的版本控制系统 [Centralized Version Control Systems] CVCS

CVS、Subversion[svn] 以及 Perforce 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。

相较于老式的本地 VCS 可以进行协同开发。但缺点是中央服务器的单点故障。如果宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。如果中心数据库所在的磁盘发生损坏，又没有做恰当备份，毫无疑问你将丢失所有数据——包括项目的整个变更历史，只剩下人们在各自机器上保留的单独快照。本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。

# 分布式版本控制系统 [Distributed Version Control System] DVCS

Git、Mercurial、Bazaar 以及 Darcs 等，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。

Git 近乎所有操作都是本地执行，在无网情况也可以进行提交，只需要等待有网在上传即可。

Git 有三种状态，你的文件可能处于其中之一：已提交（committed）、已修改（modified）和已暂存（staged）。

三个工作区域的概念：Git 仓库、工作目录以及暂存区域

push: 工作目录 -> 暂存区域 -> Git 仓库

clone/fetch/merge: Git 仓库 -> 工作目录

Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。这是 Git 中最重要的部分，从其它计算机克隆仓库时，拷贝的就是这里的数据。

工作目录是对项目的某个版本独立提取出来的内容。这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。

暂存区域是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。 有时候也被称作'索引'，不过一般说法还是叫暂存区域。

基本的 Git 工作流程如下：

* 在工作目录中修改文件。

* 暂存文件，将文件的快照放入暂存区域。

* 提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。

# 命令行

Mac OS 用户，使用 Terminal 或者 iTerm

Windows 用户，使用 git bash

# Mac OS 升级 git

``` bash
git --version

which git -> /usr/local/bin/git

brew unlink git

brew install git

git --version

brew link git

git --version
```

# 初次运行前的配置

## 列出配置项

git config --list

## 修改或增加配置

``` bash
git config --global user.name RainJoy
git config --global user.email 1490079545@qq.com
```

# 获取帮助

``` bash
git --help

git help x
```

# 获取 git 仓库

有两种取得 Git 项目仓库的方法。

第一种是：生成。在现有项目或目录下导入所有文件到 Git 中。

``` bash
git init

git add .

git commit -m 'init'

git remote add origin git@github.com:zhouyu1993/zhouyu1993.github.io.git

git push --set-upstream origin master

```

第二种是：克隆。从一个服务器克隆一个现有的 Git 仓库。

``` bash
git clone git@github.com:zhouyu1993/zhouyu1993.github.io.git
```

## git clone [url]

克隆远程 Git 仓库；这里 url 有两种地址：

![git clone 地址](/img/git_clone_url.png)

ssh: Secure Shell 更安全
> git@[host]:[user-name]/[project-name].git

http:
> http://[host]/[user-name]/[project-name].git

## 如果是使用 SSH, 需要先配置, 配置以后不再需要密码

* 1.检查本机是否有 SSH key
``` bash
cd ~/.ssh
```
如果 No such file or directory
``` bash
cd ~
mkdir .ssh
// 接 2
```
如果正常进入, 查看是否有 id_rsa.pub
``` bash
ls 或 ll
```
如果无, 则清空
``` bash
rm *
// 接 2
```
如果有，检查是否可用, 接 3

* 2.重新设置 SSH sey
``` bash
cd ~
# 填写库的登陆邮箱
ssh-keygen -t rsa -C '1490079545@qq.com'
# 有结果如下：
Enter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa): #不填直接回车#
Created directory '/c/Users/Administrator/.ssh'. #创建id_rsa#
Enter passphrase (empty for no passphrase): #不填直接回车#
Enter same passphrase again: #不填直接回车#
Your identification has been saved in /c/Users/Administrator/.ssh/id_rsa. #保存id_rsa#
Your public key has been saved in /c/Users/Administrator/.ssh/id_rsa.pub. #创建id_rsa.pub#
# 配置
git config --global user.name 'RainJoy' #name#
git config --global user.email '1490079545@qq.com' #email#
```

* 3.在库的 Settings > SSH key 对应 key 填写位置填写生成的 SSH key
``` bash
cat ~/.ssh/id_rsa.pub
# 复制内容，填写到相应位置
```

* 4.测试 SSH key 是否设置成功。以 SSH key 方式下载项目即可
``` bash
$ git clone git@github.com:zhouyu1993/zhouyu1993.github.io.git
# 看是否成功
```

# 检测当前文件状态

git status

git diff

git diff -- filename

# 撤销文件的修改

git checkout -- filename

// 撤销所有

git checkout .

# 查看库的整体提交记录

git log

# 从库中删除对某文件的控制

git rm filename

# 查看库的远程地址

git remote -v

# 将本地项目提交到远程仓库

``` bash
# 将所有修改过的工作文件提交暂存区
git add .

# 填写提交信息(message)
git commit -m 'message'

# 修改提交信息(message)
git commit --amend

# 上传
git push
```

# 将远程仓库更新到本地项目

git pull

# 打标签

``` bash
# 打上标签并写备注信息
git tag -l

git tag -a v0.1.0 -m "修改网页风格，打标签 2017/04/27"

# 上传
git push origin --tags

# 删除本地标签
git tag -d v0.1.0

# 删除远程标签
git push origin :refs/tags/v0.0.1
```

# 分支

## 分支创建与合并

``` bash
# 本地创建新分支
git branch [branche-name]

# 切换到分支
git checkout [branche-name]

# 将第一次建立的新分支上传到远程仓库
git add.
git commit -m 'add branche-name'
git push --set-upstream origin [branche-name]

# 切回主支
git checkout master

# 将分支合并到主支
git merge [branche-name]
```

## 管理分支

### 查看当前分支信息

git branch -v

### 列出所有分支【本地和远程】

git branch -a

### 拉取远程分支

$ git checkout -b [branche-name] origin/[branche-name]

### 删除本地分支

git branch -d [branche-name]

### 删除远程分支

git push origin -d [branche-name]

# 提交空目录的方法

只需要在目录下创建 .gitkeep 文件，然后在项目的 .gitignore 中设置不忽略 .gitkeep

# 让 git 对文件大小写敏感

git config core.ignorecase false
