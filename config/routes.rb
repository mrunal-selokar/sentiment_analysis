Rails.application.routes.draw do
  get 'hotels/new'

  root 'static#home'

  get '/help', to: 'static#help'

  get '/about', to: 'static#about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
end
