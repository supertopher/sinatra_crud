get '/' do
  @notes = Note.all
  @errors = params[:errors]
  erb :index
end

post '/' do
  p params[:note]
  @note = note.create(params[:note])
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
