require 'sinatra'

configure do
    set :public_folder, 'server/assets'
end

get '/' do
  send_file 'static/index.html'
end