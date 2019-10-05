class Api::V1::DiagnosesController < ApplicationController
    before_action :set_diagnosis, only: [:show, :update, :destroy]

    def show 
        render json: @diagnosis, include: [:user]
    end 

    def create 
        @diagnosis = Diagnosis.new(diagnosis_params)

        if @diagnosis.save 
            render json: @diagnosis, status: :created, location: @diagnosis
        else 
            render json: @diagnosis.errors, status: :unprocessable_entity 
        end 
    end  

    def update 
        if @diagnosis.update(diagnosis_params)
            render json: @diagnosis, include: [:user] 
        else 
            render @diagnosis.errors, status: :unprocessable_entity 
        end 
    end 

    def destroy 
        @diagnosis.destroy 
    end 
    
    private 

        def set_diagnosis 
            @diagnosis = Diagnosis.find(params[:id])
        end 

        def diagnosis_params 
            params.require(:diagnosis).permit(:name, :short_description, :full_description, :medical_conditon, :prof_name, :treatment_description, :possible_symptoms, :specializations => [], :user_note) 
        end 

end
