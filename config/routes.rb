Rails.application.routes.draw do
  get 'users/new'

  get 'hotels/new'

  root 'static#home'

  get '/help', to: 'static#help'

  get '/about', to: 'static#about'

  get '/signup', to: 'users#new'

 
  resources :hotels
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
end
