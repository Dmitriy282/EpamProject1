#!/usr//bin/env bash
work_dir=`pwd`
rm -rf  $workdir/front/build
cd $work_dir/front && npm run build
cd $work_dir

