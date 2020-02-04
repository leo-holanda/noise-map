Rails.application.routes.draw do
  resources :complaints
  root "complaints#index"
  get '/search', to: 'complaints#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
