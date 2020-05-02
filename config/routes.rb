Rails.application.routes.draw do
  root 'complaints#index'
  get '/search', to: 'complaints#search'
  resources :complaints, only: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end