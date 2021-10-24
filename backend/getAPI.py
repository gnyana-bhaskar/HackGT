import pickle
import os
import re
import io
from webbrowser import get
from googleapiclient.discovery import build
from flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.http import MediaIoBaseDownload
import requests
from tqdm import tqdm
import shutil
import pandas as pd

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/drive.metadata',
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file',
          'https://www.googleapis.com/auth/drive.metadata.readonly'
          ]

def get_gdrive_service():
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=62038)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
    # return Google Drive API service
    return build('drive', 'v3', credentials=creds)

def main():
    """Shows basic usage of the Drive v3 API.
    Prints the names and ids of the first 5 files the user has access to.
    """
    service = get_gdrive_service()
    # Call the Drive v3 API
    results = service.files().list(
        pageSize=5, fields="nextPageToken, files(id, name, mimeType, size, parents, modifiedTime)").execute()
    # get the results
    items = results.get('files', [])
    
    download(items)
    sqlAccess()

def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)

    return conn
def sqlAccess():
    database = r"C:\\Users\\gnyan\\Documents\\GATECH\\HackGT\\frontend\\backend\\data.db"
    conn = create_connection(database)
    df = pd.read_excel("Sales.xls")
    df.to_sql('sd', conn, if_exists='append')

def trainData():
    

    

def download(items):
    service = get_gdrive_service()
    file_id = items[0]['id']
    request = service.files().get_media(fileId=file_id, )
    fh = io.BytesIO()
    downloader = MediaIoBaseDownload(fh, request)
    done = False
    while done is False:
        status, done = downloader.next_chunk()
        print( "Download %d%%." % int(status.progress() * 100))
    
    fh.seek(0)
    with open('./dowloaded.txt', 'wb') as f:
        shutil.copyfileobj(fh, f, length=131072)


if __name__ == '__main__':
    while(True):
        service = get_gdrive_service()
        results = service.files().list(
            pageSize=5, fields="nextPageToken, files(id, name, mimeType, size, parents, modifiedTime)").execute()
        # get the results
        items = results.get('files', [])
        curr_size = len(items)
        if (len(items) != curr_size):
            break
    main()