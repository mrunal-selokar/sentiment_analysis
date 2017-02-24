Rails.application.routes.draw do
  get 'sessions/new'

  get 'users/new'

  get 'hotels/new'

  root 'static#home'

  get    '/help',   to: 'static#help'

  get    '/about',  to: 'static#about'

  get    '/signup', to: 'users#new'

  get    '/login',  to: 'sessions#new'
  
  post   '/login',  to: 'sessions#create'
  
  delete '/logout', to: 'sessions#destroy'
 
  resources :hotels
  resources :users
  resources :reviews, only: :create
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
end
