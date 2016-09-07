DATE=$(date +"%Y%m%d")
ORG="fiware.scl"
PRODUCT="keyrock.tutorial"

TAG="$ORG/$PRODUCT:$DATE"
TAG_LATEST="$ORG/$PRODUCT:latest"

echo "building image with tags: $TAG, $TAG_LATEST"
docker build -f Dockerfile -t $TAG -t $TAG_LATEST .

docker rm -f $PRODUCT || true
docker run -d -p 2000:2000 --name=$PRODUCT $TAG tail -f /dev/null
docker exec -it $PRODUCT node server


