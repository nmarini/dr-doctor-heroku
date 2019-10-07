Rails.application.routes.draw do

  post "/api/v1/login", to: "api/vi/sessions#create"
  post "/api/v1/get_current_user", to: "api/vi/sessions#get_current_user"

  namespace :api do 
    namespace :v1 do 
      resources :diagnoses, :only => [:show, :create, :update, :destroy]
      resources :users, :only => [:show, :create, :update, :destroy]
      
    end 
  end 
  
end
