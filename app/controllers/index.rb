get '/' do
  @notes = Note.all
  @errors = params[:errors]
  erb :index
end

post '/' do
  # p params[:note]
  @note = Note.create(params[:note])
  @notes = Note.all
  if @note.valid?
    redirect '/'
  else
    erb :index
  end
end

get '/notes/:id/show' do |id|
  @note = Note.find(id)
  erb :note_show, :layout => false
end

get '/notes/:id/delete' do |id|
  @note = Note.find(id)
  @note.delete
  erb :note_show, :layout => false
end

get '/notes/:id/edit' do |id|
  @note = Note.find(id)
  erb :note_edit, layout: false
end

post '/notes/:id/edit' do |id|
  @note=Note.find(id)
  @note.update_attributes(params[:note])
end
