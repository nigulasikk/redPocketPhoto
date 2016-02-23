gulp
ftp -i -n <<- EOF
open qiankaijie.com
user qxu1146350160 qiankaijie
bin
chmod -R 777 /htdocs
cd htdocs
mput toZhongyang/**/*.*
bye