class ComplaintsController < ApplicationController

  def index
    @complaint = Complaint.new
    @all_complaints = Complaint.all

    respond_to do |format|
      format.html
      format.js
    end
  end

  def search
    @isComplaint = params[:isComplaint]
    address = get_address
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
      flash[:info] = "Seu relato foi registrado com sucesso!"
      @marker = @complaint
    end
  end

  private

  def complaint_params
    params.require(:complaint).permit(:latitude, :longitude, :description, :noise_type)
  end

  def get_address
    if params[:address]
      @is_complaint = false
      address = params[:address]
    elsif params[:address_complaint]
      @is_complaint = true
      address = params[:address_complaint]
    end
  end

end
