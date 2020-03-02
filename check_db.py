from pymongo import MongoClient
#import numpy as np
import datetime
#from word2vec import get_word2vec
# print("updated at :")
# print(datetime.datetime.now())
# client = MongoClient()
# db = client['newsdb']
# #
# articles = db.news

#
client = MongoClient()
db = client['newsdb_week']
#db = client['webdb']
#
#articles = db.tfidfclusters
# count = 0
# for a in articles.find():
# 	count += 1
	# print("cluster "+str(a["num"]))
	# print(a["numofnews"])
# print("num of clusters :")
# print(str(count)+"\n")

print("hello")
articles = db.weekarticles
count = 0
now = datetime.datetime.now()
for a in articles.find({"timestamp": {"$gt": now.timestamp() - 86400.0}}):
#rem_list = []
#for a in articles.find({}):
##	if "namehnews.com" in a["url"]:
#		rem_list.append(a["url"])
	count += 1
print(count)

#for link in rem_list:

#	myquery = {"url": link}
#	articles.delete_many(myquery)
# print(articles.count_documents({"timestamp": {"$gt": now.timestamp() - 86400.0}}))
#
# articles = db.searchstatus
# mydict = {"status": "done"}
# # x = articles.insert_one(mydict)
# count = 0
# for a in articles.find():
# 	print(a["status"])
# 	count += 1
# print(count)



# client_test = MongoClient()
# db_test = client_test['newsdb_test']
# articles_test = db_test.articles
#
# count = 0
# for a in articles_test.find():
#     count += 1
# print(count)


