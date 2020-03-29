import coreapi

token='e7ec9edb09bec28c97f65345520b4ee89b4490eb'
auth=coreapi.auth.TokenAuthentication(scheme='Token', token=token)
client=coreapi.Client(auth=auth)
schema = client.get('http://127.0.0.1:8000/tarefas/')