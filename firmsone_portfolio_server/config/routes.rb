Rails.application.routes.draw do

  get 'pages/home'

  get 'pages/about'

  get 'pages/contact'
  scope :api, defaults: {format: :json}  do 
    resources :technologies
    resources :topics
    resources :portfolios
    resources :blogs do 
      member do 
        post :toggle_status
      end
    end
  end
  get '/home'  => 'pages#home'
  get '/pages#' => 'pages#home'
  root "pages#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
