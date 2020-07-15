###
 # @Author: wangchaoxu
 # @Date: 2020-07-15 19:27:22
 # @LastEditors: wangchaoxu
 # @LastEditTime: 2020-07-15 19:30:07
 # @Description: git 自动提交脚本,放到当前项目下 window需要安装Git Bash
###

#!/bin/bash
git add --all
echo -e "\033[33m 请输入提交描述文字如果没有默认: 提交代码 \033[0m"
read describe
if [ ! -n "$describe" ]
then
describe="提交代码"
fi
echo $describe
git commit -m $describe

echo -e "\033[33m 请输入要拉取的分支名称: 提交代码 \033[0m"
echo -e "\033[33m 0 -> master \033[0m"
echo -e "\033[33m 1 -> develop \033[0m"
echo -e "\033[33m 如果是其他分支请直接输入分支名称: 提交代码 \033[0m"

istrue=1

while [ $istrue == 1 ]
do
read barch
tempbarch=""
if [ $barch == 0 ]
then
echo -e "\033[33m 输入的是master: 提交代码 \033[0m"
tempbarch="master"
elif [ $barch == 1 ]
then
echo -e "\033[33m 输入的是develop: 提交代码 \033[0m"
tempbarch="develop"
else
echo -e "\033[33m 输入的是develop: 输入的是其他分支 \033[0m"
tempbarch=$barch
fi
echo $tempbarch
git pull origin $tempbarch
if [ $? == 0 ]
then
istrue=0
echo $istrue
else
echo -e "\033[33m 输入的是develop: 提交代码 \033[0m" "请输入正确的分支名称"
fi
done

echo -e "\033[33m 请输入要上传的分支名称 \033[0m"
echo -e "\033[33m 0 -> master \033[0m"

echo -e "\033[33m 1 -> develop\033[0m"

echo -e "\033[33m 如果是其他分支请直接输入分支名称 \033[0m"

istruetwo=1

while [ $istruetwo == 1 ]
do
read barcha
pushbarch=""
if [ $barcha == 0 ]
then
echo -e "\033[33m 输入的是master \033[0m"
pushbarch="master"
elif [ $barcha == 1 ]
then
echo -e "\033[33m 输入的是develop \033[0m"
pushbarch="develop"
else
echo -e "\033[33m 输入的是其他分支 \033[0m"
pushbarch=$barcha
fi
echo $pushbarch
git push origin $pushbarch
if [ $? == 0 ]
then
istruetwo=0
echo $istruetwo
else
echo -e "\033[33m 请输入正确的分支名称 \033[0m"
fi
done
read -p "任意键继续..."
echo "---END---"
