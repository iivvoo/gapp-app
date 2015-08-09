#!/bin/sh

DEPLOYHOST=rommel.m3r.nl
HASH=`git show --oneline | head -1 | awk '{print $1}'`
DATE=`date +'%Y%m%d%H%M%S'`
DEST="$HASH-$DATE"

ember build
rsync -av dist/ $DEPLOYHOST:gapp/$DEST
ssh $DEPLOYHOST "cd gapp && ln -sf $DEST active"
