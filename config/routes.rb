Rails.application.routes.draw do
  resources :complaints
  root "complaints#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
