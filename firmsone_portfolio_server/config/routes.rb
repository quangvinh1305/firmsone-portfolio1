Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  get 'pages/home'

  get 'pages/about'

  get 'pages/contact'
  scope :api, defaults: {format: :json}  do 
    resources :technologies
    resources :topics
    resources :skills
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
