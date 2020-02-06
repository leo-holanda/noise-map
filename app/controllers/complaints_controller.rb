class ComplaintsController < ApplicationController

  def index
    @complaint = Complaint.new
    respond_to do |format|
      format.html
      format.js
    end
  end

  def search
    if params[:address]
      address = params[:address]
      @is_complaint = false
    elsif params[:address_complaint]
      address = params[:address_complaint]
      @is_complaint = true
    end
    
    if address
      @coordinates = (Geocoder.search(address)).first.coordinates
      respond_to do |format|
        format.js
      end
    end
  end

  def create
    @complaint = Complaint.new(complaint_params)
    if @complaint.save
      flash[:info] = "Seu relato foi registrada com sucesso!"
    end
  end

  private

  def complaint_params
    params.require(:complaint).permit(:latitude, :longitude, :description, :noise_type)
  end
end
