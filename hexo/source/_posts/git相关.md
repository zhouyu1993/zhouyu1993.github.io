---
title: git相关

categories:
  - web

tags:
  - 管理工具
---

Git 是一个免费的开源分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

<!-- more -->

[git](https://git-scm.com/)

[doc](https://git-scm.com/book/zh/v2/)

## 关于版本控制 VC

版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。

如果你是位图形或网页设计师，可能会需要保存某一幅图片或页面布局文件的所有修订版本（这或许是你非常渴望拥有的功能），采用版本控制系统（VCS）是个明智的选择。有了它你就可以将某个文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。使用版本控制系统通常还意味着，就算你乱来一气把整个项目中的文件改的改删的删，你也照样可以轻松恢复到原先的样子。但额外增加的工作量却微乎其微。

### 本地版本控制系统 [Local Version Control Systems] LVCS

复制整个项目，以改名加时间为备份。

``` bash
1. file-2018010101.md
2. file-2018010102.md
...
3. file-2018010201.md
...
```

其中最流行的一种叫做 RCS，现今许多计算机系统上都还看得到它的踪影。 甚至在流行的 Mac OS X 系统上安装了开发者工具包之后，也可以使用 rcs 命令。 它的工作原理是在硬盘上保存补丁集（补丁是指文件修订前后的变化）；通过应用所有的补丁，可以重新计算出各个版本的文件内容。

### 集中化的版本控制系统 [Centralized Version Control Systems] CVCS

如何让在不同系统上的开发者协同工作？CVCS 就产生了。

CVS、Subversion[svn] 以及 Perforce 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。

好处是相较于老式的本地 LVCS 可以进行协同开发。但缺点是中央服务器的单点故障。如果宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。如果中心数据库所在的磁盘发生损坏，又没有做恰当备份，毫无疑问你将丢失所有数据——包括项目的整个变更历史，只剩下人们在各自机器上保留的单独快照。本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。

### 分布式版本控制系统 [Distributed Version Control System] DVCS

为了应对这种问题，DVCS 就面世了。

Git、Mercurial、Bazaar 以及 Darcs 等，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。

## Git

### 存储每个文件与初始版本的差异

Git 更像是把数据看作是对小型文件系统的一组快照。 每次你提交更新，或在 Git 中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引。 为了高效，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。 Git 对待数据更像是一个 快照流。

### Git 近乎所有操作都是本地执行

在无网情况也可以进行提交，只需要等待有网再上传即可。

### Git 保证完整性

Git 中所有数据在存储前都计算校验和，然后以校验和来引用。 这意味着不可能在 Git 不知情时更改任何文件内容或目录内容。 这个功能建构在 Git 底层，是构成 Git 哲学不可或缺的部分。 若你在传送过程中丢失信息或损坏文件，Git 就能发现。

Git 用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）。 这是一个由 40 个十六进制字符（0-9 和 a-f）组成字符串，基于 Git 中文件的内容或目录结构计算出来。

### 三种状态

Git 有三种状态，你的文件可能处于其中之一：已提交（committed）、已修改（modified）和已暂存（staged）。 已提交表示数据已经安全的保存在本地数据库中。 已修改表示修改了文件，但还没保存到数据库中。 已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。

### 三个工作区域

三个工作区域的概念：Git 仓库（Git Repository）、工作目录（Working Directory）以及暂存区域（Staging Area）。

push: 工作目录 -> 暂存区域 -> Git 仓库

clone/fetch/merge: Git 仓库 -> 工作目录

Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。这是 Git 中最重要的部分，从其它计算机克隆仓库时，拷贝的就是这里的数据。

工作目录是对项目的某个版本独立提取出来的内容。这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。

暂存区域是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。 有时候也被称作'索引'，不过一般说法还是叫暂存区域。

基本的 Git 工作流程如下：

* 在工作目录中修改文件。

* 暂存文件，将文件的快照放入暂存区域。

* 提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。

## 命令行

Mac OS 用户，使用 Terminal 或者 [iTerm2](https://iterm2.com/)

Windows 用户，使用 [git-bash](https://gitforwindows.org/)

## 安装 Git

Mac OS 用户 `brew install git`

Windows 用户 `http://git-scm.com/download/win`

## 初次运行前的配置

Git 自带一个 git config 的工具来帮助设置控制 Git 外观和行为的配置变量。 这些变量存储在三个不同的位置：

* /etc/gitconfig 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果使用带有 --system 选项的 git config 时，它会从此文件读写配置变量。
* ~/.gitconfig 或 ~/.config/git/config 文件：只针对当前用户。 可以传递 --global 选项让 Git 读写此文件。
* 当前使用仓库的 Git 目录中的 config 文件（就是 .git/config）：针对该仓库。

**每一个级别覆盖上一级别的配置，所以 .git/config 的配置变量会覆盖 /etc/gitconfig 中的配置变量。**

### 列出配置项

``` bash
git config --list
```

### 修改或增加配置

``` bash
git config --global user.name RainJoy
git config --global user.email 1490079545@qq.com
```

``` bash
git config user.name RainJoy
git config user.email 1490079545@qq.com
```

### 获取帮助

``` bash
git --help

git help xxxx
```

## 获取 git 仓库

有两种取得 Git 项目仓库的方法。

第一种是：生成。在现有项目或目录下导入所有文件到 Git 中。

``` bash
git init

git add .

git add LICENSE # 增加证书

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

使用 git:// 协议或者使用 SSH 传输协议，更安全

> git@[host]:[user-name]/[project-name].git

使用https:// 协议或者 http:// 协议

> https://[host]/[user-name]/[project-name].git

## 如果是使用 SSH, 需要先配置

* 1.检查本机是否有 SSH key

``` bash
cd ~/.ssh
```

如果 No such file or directory

``` bash
cd ~
mkdir .ssh

# 接 2
```

如果正常进入, 查看是否有 id_rsa.pub

``` bash
ls # 或 ll
```

如果无, 则清空

``` bash
rm *
# 接 2
```

如果有，检查是否可用, 接 3

* 2.重新设置 SSH sey

``` bash
cd ~
# 填写库的登陆邮箱
ssh-keygen -t rsa -C '1490079545@qq.com'
# 有结果如下：
Enter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa): #可不填直接回车#
Created directory '/c/Users/Administrator/.ssh'. #创建id_rsa#
Enter passphrase (empty for no passphrase): #可不填直接回车#
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

## 检测当前文件状态

``` bash
git status -s
```

## 查看已暂存和未暂存的修改（具体修改了什么地方）

``` bash
git diff

git diff [filename]
```

## 撤销文件的修改

``` bash
# 撤销单个文件

git checkout [filename]

# 撤销所有

git checkout .
```

## 忽略文件

[.gitignore 文件](https://help.github.com/articles/ignoring-files/)

文件 .gitignore 的格式规范如下：
  - 所有空行或者以 ＃ 开头的行都会被 Git 忽略。
  - 可以使用标准的 glob 模式匹配。
  - 匹配模式可以以（/）开头防止递归。
  - 匹配模式可以以（/）结尾指定目录。
  - 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。

## 查看库的整体提交记录

``` bash
git log
```

## 从库中删除对某文件的控制

``` bash
git rm --cached [filename]
```

## 查看库的远程地址

``` bash
git remote -v
```

## 将本地项目提交到远程仓库

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

## 将远程仓库更新到本地项目

``` bash
git pull
```

## 打标签

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

``` bash
git branch -v
```

### 列出所有分支【本地和远程】

``` bash
git branch -a
```

### 拉取远程分支

``` bash
git checkout -b [branche-name] origin/[branche-name]
```

### 删除本地分支

``` bash
git branch -d [branche-name]
```

### 删除远程分支

``` bash
git push origin -d [branche-name]
```

# 提交空目录的方法

只需要在目录下创建 .gitkeep 文件，然后在项目的 .gitignore 中设置不忽略 .gitkeep

# 让 git 对文件大小写敏感

``` bash
git config core.ignorecase false
```
