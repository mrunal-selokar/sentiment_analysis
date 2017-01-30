Rails.application.routes.draw do
   root 'static#home'
  get 'static/home'
  get 'static/help'
  get 'static/about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
end
