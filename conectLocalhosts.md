execute this command in ubuntu:
ip addr | grep -E "\b*inet.*global" | sed -E "s/inet(.*)\/.*/\1/"

result example:
 172.29.51.119
 172.17.0.1
 172.18.0.1

get the first ->  172.29.51.119

execute this command on shell windows how administrator (the port in the example is 3333):

netsh interface portproxy add v4tov4 listenport=3333 listenaddress=0.0.0.0 connectport=3333 connectaddress=172.29.51.119