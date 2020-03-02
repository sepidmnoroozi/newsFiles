from elasticsearch import Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])
e1 = {
    "first_name":"nitin",
    "last_name":"panwar",
    "age": 27,
    "about": "Love to play cricket",
    "interests": ['sports','music'],
}
#res = es.index(index='megacorp', doc_type='employee', id=1, body=e1)
#res=es.get(index='megacorp',doc_type='employee',id=1)
res= es.search(index='megacorp', doc_type='employee', body={'query':{'match_all':{}}})
#print(res)
print('Got %d hits' %res['hits']['total']['value'])
